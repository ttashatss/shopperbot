// reply message from user
const replyText = (client, replyToken, text, quoteToken) => {
  return client.replyMessage({
    replyToken,
    messages: [
      {
        type: "text",
        text,
        quoteToken,
      },
    ],
  });
};

export default replyText;
