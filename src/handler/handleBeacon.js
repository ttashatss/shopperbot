//  Establish connection and share information with Beacons

import pushText from "../utils/pushText.js";

const handleBeacon = (client, userId, event) => {
  const type = event.beacon.type;
  const hwid = event.beacon.hwid;
  const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
  const text = `${dm}`;
  console.log(event.beacon)
  return pushText(client, userId, text);
};

export default handleBeacon;
