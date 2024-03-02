// get user information from userId
import dotenv from "dotenv";

const getUserName = async(userId, cat) => {
    const profileApi = "https://api.line.me/v2/bot/profile/".concat(userId)
    const response = await fetch(profileApi, {
        method: "GET", 
        headers: { 'Authorization': 'Bearer '.concat(cat) }
    })
    const profile = await response.json();
    return(profile.displayName);
}

export default getUserName;
