"use strict";

import line from "@line/bot-sdk";
import express from "express";
import dotenv from "dotenv";

// import handler functions
import handleFollow from "./handler/handleFollow.js";
import handleMenuPrg from "./handler/handleMenuPrg.js";
import handleMenuAsk from "./handler/handleMenuAsk.js";
import handleMsgType from "./handler/handleMsgType.js";
import handleError from "./handler/handleError.js";
import handleBeacon from "./handler/handleBeacon.js";
import handleMsg from "./handler/handleMsg.js";
import handleTestBeacon from "./handler/handleTestBeacon.js";
import getCustomizedInfo from "./utils/getCustomizedInfo.js";
import findLastStore from "./utils/findLastStore.js";
import updateUserStore from "./utils/updateUserStore.js";

dotenv.config();

const config = {
  port: process.env.PORT,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.messagingApi.MessagingApiClient(config);
const app = express();

// webhook callback
app.post("/webhook", line.middleware(config), (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(
    req.body.events.map((event) => {
      console.log("event", event);
      return handleEvent(event);
    })
  )
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// callback function to handle a single event
function handleEvent(event) {
  const cat = config.channelAccessToken;
  const userId = event.source.userId;
  switch (event.type) {
    case "message":
      const message = event.message;

      if (message.type !== "text") {
        Promise.resolve("ok");
        return handleMsgType(client, userId);
      }

      let triggerMsg = event.message.text.toUpperCase();
      switch (triggerMsg) {
        case "ABOUT SIAM PARAGON":
          return handleMenuPrg(userId, cat);

        case "GOT A QUESTION":
          return handleMenuAsk(client, userId);

        case "CUSTOMIZE SHOPPERBOT":
          // to do survey for next semester
          return handleError(client, userId);

        case "YO":
          return findLastStore(userId);

        case "YE":
          return updateUserStore(userId);

        case "TE":
          return handleBeacon(client, userId, event);


        default:
          // to connect to LLM
          return handleMsg(client, userId, event);
      }

    case "follow":
      return handleFollow(client, userId, cat);

    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case "join":
      return console.log(event.replyToken, `Joined ${event.source.type}`);

    case "leave":
      return console.log(`Left: ${JSON.stringify(event)}`);

    case "postback":
      let data = event.postback.data;
      return console.log(event.replyToken, `Got postback: ${data}`);

    case "beacon":
      // return handleBeacon(client, userId, event, userData);
      return handleBeacon(client, userId, event);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

const port = config.port;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
