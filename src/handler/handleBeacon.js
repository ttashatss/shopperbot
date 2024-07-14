//  Establish connection and share information with Beacons

import pushText from "../utils/pushText.js";
import formatDate from "../utils/formatDate.js";
import updateUserStore from "../utils/updateUserStore.js";
import findMatchStore from "../utils/findMatchStore.js";


// for testing
// const hwid = 123456;
// const text = "wassupgurl";

const handleBeacon = async (client, userId, event) => {
  // Beacon specific variables
  const hwid = event.beacon.hwid;
  // const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
  // const text = `${dm}`;

  const timestamp = event.timestamp;
  const date = formatDate(timestamp)[0];
  const time = formatDate(timestamp)[1];

  const  stores = await updateUserStore(userId, hwid, date, time);
  console.log(stores)

  const shop_name = stores[0].shop_name
  console.log(shop_name)
  const storeNotMatch = findMatchStore(stores, shop_name);

  if (storeNotMatch) {
    pushText(client, userId, stores[0].ads_message);
  } else {
    console.log("No send")
  }
};

export default handleBeacon;
