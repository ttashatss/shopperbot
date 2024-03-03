// send message when user unfollows
import getUserName from "../utils/getUserName.js";
import pushText from "../utils/pushText.js";

const handleUnfollow = async (client, userId, cat) => {
  const username = await getUserName(userId, cat);
  const msg = "Oh no, ".concat(
    username,
    "!\n\nDid I do something wrong, or is it just one of those days?\n\nIf you need anything or want to reconnect, I'm here. Happy Shopping!🌟"
  );
  pushText(client, userId, msg);
};

export default handleUnfollow;

