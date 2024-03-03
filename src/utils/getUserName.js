// get user display name from userId
import dotenv from "dotenv";
dotenv.config();

const getUserName = async (userId, cat) => {
  const profileApi = process.env.LINE_MESSAGING_API.concat("profile/", userId);
  const response = await fetch(profileApi, {
    method: "GET",
    headers: { Authorization: "Bearer ".concat(cat) },
  });
  const profile = await response.json();
  return profile.displayName;
};

export default getUserName;
