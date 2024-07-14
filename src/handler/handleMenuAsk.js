// response when user want to ask the bot question - quick replies to trigger keyboard and customization survey
import pushText from "../utils/pushText.js";
import dotenv from "dotenv";
dotenv.config();

const handleMenuAsk = async (client, userId) => {
  try {
    const data = await client.pushMessage({
      to: userId,
      messages: [
        {
          type: "text",
          text: "Sure! Please let me know how I can help.",
          quickReply: {
            items: [
              {
                type: "action",
                action: {
                  type: "uri",
                  label: "Customize ShopperBot",
                  uri: "https://liff.line.me/2005697708-Pgw3LgeA",
                },
              },
              {
                type: "action",
                action: {
                  type: "postback",
                  label: "Ask ShopperBot",
                  data: "null",
                  inputOption: "openKeyboard",
                },
              },
            ],
          },
        },
      ],
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export default handleMenuAsk;
