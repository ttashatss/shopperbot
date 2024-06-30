// send paragon information when user select About Siam Paragon on rich menu
import dotenv from "dotenv";
dotenv.config();

const handleMenuPrg = async (userId, cat) => {
  const messageApi = process.env.LINE_MESSAGING_API.concat("message/push");
  try {
    const response = await fetch(messageApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(cat),
      },
      body: JSON.stringify({
        to: userId,
        messages: [
          {
            type: "template",
            altText: "About Siam Paragon",
            template: {
              type: "image_carousel",
              columns: [
                {
                  imageUrl: "https://drive.usercontent.google.com/download?id=1T9tadg1Dy5MdOfqysGU9UgLdBkXvC7gi&authuser=1",
                  action: {
                    type: "message",
                    label: "Ask more",
                    text: "Got A Question",
                  },
                },
                {
                  imageUrl: "https://drive.usercontent.google.com/download?id=1AWiCn1B2kuBMF9HH_T8a4PgqCztjry-T&authuser=1",
                  action: {
                    type: "uri",
                    label: "Learn more",
                    uri: "https://www.siamparagon.co.th/privilege",
                  },
                },
                {
                  imageUrl: "https://drive.usercontent.google.com/download?id=1RiIHZuottIhe7dgsYq1VXUJ3ANCo23VH&authuser=1",
                  action: {
                    type: "uri",
                    label: "Learn more",
                    uri: "https://www.siamparagon.co.th/happening/Parking-Fees-Service-2022/1339#:~:text=%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%20(Car,Bright%20Space%20Zone%20(1%20Course)",
                  },
                },
              ],
            },
          },
        ],
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

export default handleMenuPrg;
