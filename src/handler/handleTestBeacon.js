//  For testing beacons

import pushText from "../utils/pushText.js";

// for testing
// const hwid = 123456;
// const text = "wassupgurl";

const handleBeacon = (client, userId, event, userData) => {

  const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
  const text = `${dm}`;

  pushText(client, userId, text);
};

export default handleBeacon;
