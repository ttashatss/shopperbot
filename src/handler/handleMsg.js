// Receive text prompt from user and connect to Generative LLM model

import pushText from "../utils/pushText.js";

const handleMsg = (client, userId, event) => {
  const msg = event.message.text;
  // get user info and user location from database

  // parse information to LLM using API

  // receive answer from API
  
  pushText(client, userId, msg);
};

export default handleMsg;

