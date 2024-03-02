// send message to user
const pushText = (client, userId, text) => {
  return client.pushMessage({
    to: userId,
    messages: [
      {
        type: "text",
        text,
      },
    ],
  });
};

export default pushText;
