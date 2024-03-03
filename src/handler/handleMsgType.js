// send prompt new question message when user send prompts in non-text type
import pushText from "../utils/pushText.js";

const handleMsgType = (client, userId) => {
  const msg =
    "Hey there! Could you please retype it in text format so I can assist you better?\n\nHappy Shopping!🌟";
  pushText(client, userId, msg);
};

export default handleMsgType;
