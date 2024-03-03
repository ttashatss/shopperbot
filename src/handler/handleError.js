// send error message to user
import pushText from "../utils/pushText.js";

const handleError = (client, userId) => {
  const msg =
    "Oops!\n\nThe feature is currently under improvement to make your shopping experience better!🌟";
  pushText(client, userId, msg);
};

export default handleError;
