// Receive text prompt from user and connect to Generative LLM model

import pushText from "../utils/pushText.js";
import getCustomizedInfo from "../utils/getCustomizedInfo.js";
import findLastStore from "../utils/findLastStore.js";

const handleMsg =  async (client, userId, event) => {
  var hwid = 0;
  var store = "not found";

  const userInfo = await getCustomizedInfo(userId);
  const userInfoText = `My age is ${userInfo.age}, I speak ${userInfo.language}, I am interested in ${userInfo.interest}, I shop ${userInfo.frequency}, and I have other comments: ${userInfo.other}`

  const msg = event.message.text

  const userStore = await findLastStore(userId);
  const storeName = userStore[0].shop_name;

  // Parse information to LLM Module
  const apibody = {
    userId: userId,
    userInfo: userInfoText, // To get from database - text from questionnaires
    prompt: msg,
    location: storeName, // To get from database - latest beacon information
  };

  console.log(apibody)

  const apiurl = "http://127.0.0.1:8000";
  // Make a request to the API endpoint
  fetch(apiurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apibody),
  })
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Problem with network response");
      }
      return response.json();
    })
    .then((data) => {
      // Send answer back to client
      console.log(data);
      pushText(client, userId, data);
    })
    .catch((error) => {
      console.error("Problem with fetch operations: ", error);
    });
  
};

export default handleMsg;