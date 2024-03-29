//  Establish connection and share information with Beacons

import pushText from "../utils/pushText.js";

var user_info = []
var lastResetDate = new Date().getDate(); // Initialize with the current date

// reset user_info everyday
function resetListIfNeeded() {
  let currentDate = new Date().getDate();
  if (currentDate !== lastResetDate) {
      // Reset the list to be empty
      user_info = [];
      // Update the last reset date
      lastResetDate = currentDate;
  }
}
// Call resetListIfNeeded function periodically, for example every hour
setInterval(resetListIfNeeded, 3600000); // Call every hour (3600000 milliseconds)

const handleBeacon = (client, userId, event) => {
  const type = event.beacon.type;
  const hwid = event.beacon.hwid;
  const timestamp = event.timestamp;
  var date = new Date(timestamp);
  var info = [userId, hwid]
  var updated = false;
  const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
  const text = `${dm}`;

  // Format datetime
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2); // Add 1 to month because months are zero-based
  let day = ('0' + date.getDate()).slice(-2);
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  let seconds = ('0' + date.getSeconds()).slice(-2);
  let datetimeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

  // update user_info if found in the list. If found, update and do nothing.
  if (user_info.length != 0) {
    for (let i = 0; i < user_info.length; i++) {
        if (user_info[i][0] == info[0]) {
          user_info[i][1] == info[1];
          updated = true;
          console.log(user_info)
          console.log(datetimeString)
          return;
        }
    }
    // if not found, append new data to user_info
    if (!updated) {
        user_info.push(info);
        console.log(user_info)
        console.log(datetimeString)
        return pushText(client, userId, text);
    }
  }

  user_info.push(info)
  // console.log(event.beacon)
  // console.log(datetimeString)
  console.log(user_info)
  console.log(datetimeString)
  // console.log(date)
  console.log(lastResetDate)
  return pushText(client, userId, text);
};

export default handleBeacon;
