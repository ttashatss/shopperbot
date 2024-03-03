// send greeting message when user adds
import getUserName from "../utils/getUserName.js";
import pushText from "../utils/pushText.js";

const handleFollow = async (client, userId, cat) => {
  const username = await getUserName(userId, cat);
  const msg = "Hello ".concat(
    username,
    ", this is Paragon ShopperBot!🛍️\n\nHow may I help you today? Whether you have questions about our offerings, services, or anything else related to our department store, feel free to ask.\n\nHappy shopping!🌟"
  );
  pushText(client, userId, msg);
};

export default handleFollow;
