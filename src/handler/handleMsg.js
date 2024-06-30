// Receive text prompt from user and connect to Generative LLM model

import pushText from "../utils/pushText.js";

const handleMsg = (client, userId, event, userData, beaconData) => {
  const msg = event.message.text;
  var hwid = 0;
  var store = "not found";

  // Get user information
  const idIndex = userData.findIndex((element) => element[0] == userId);
  if (idIndex !== -1) {
    hwid = userData[idIndex][1][0];
  }

  // Get store information
  const beaconIndex = beaconData.findIndex((element) => element[0] == hwid);
  if (beaconIndex !== -1) {
    store = beaconData[beaconIndex][1];
  }

  // Parse information to LLM using API

  const apibody = {
    userId: userId,
    userInfo: "userInfo", // To get from database - text from questionnaires
    prompt: msg,
    location: "store A", // To get from database - latest beacon information
  };

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