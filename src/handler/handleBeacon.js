//  Establish connection and share information with Beacons

import pushText from "../utils/pushText.js";
import formatDate from "../utils/formatDate.js";

var userData = [];
var lastResetDate = new Date(); // Initialize with the current date

// for testing
// const hwid = 123456;
// const text = "wassupgurl";

const handleBeacon = (client, userId, event) => {
  // Beacon specific variables
  const hwid = event.beacon.hwid;
  const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
  const text = `${dm}`;

  const timestamp = event.timestamp;
  const date = formatDate(timestamp)[0];

  // Reset if current date is different from lastResetDate
  if (date !== formatDate(lastResetDate)[0]) {
    userData = [];
    lastResetDate = new Date();
    console.log("userData is reset");
  }

  const idIndex = userData.findIndex((element) => element[0] == userId);
  if (idIndex == -1) {
    userData.push([userId, [hwid]]);
    console.log(userData);
    return pushText(client, userId, text);
  } else {
    userData[idIndex][1].unshift(hwid);
    console.log(userData);
    return;
  }
};

export default handleBeacon;
