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
                  imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AKGpihYBL4AEbDm2ZWdhZVE737zuA7g9i-nxAMXUUo-xE-a1nCNT_De-QD_-e7AI2CW__G0b9xJSYbDcLJIlYnyoDxxNkETy=s1600",
                  action: {
                    type: "message",
                    label: "Ask more",
                    text: "Got A Question",
                  },
                },
                {
                  imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AKGpihbKN6m7KQqwRQKbV2kt4SuvOpX-HYnJ0UOsv_Sfglz5d64hUXfCES0B0ohd6nyvD0Ebo8O40wYZmIUf_8X8VvVGvWoGeA=s1600",
                  action: {
                    type: "uri",
                    label: "Learn more",
                    uri: "https://www.siamparagon.co.th/privilege",
                  },
                },
                {
                  imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AKGpiha49w4MUq5igxdFekqQQypGbbQk385tAl_DDGI46kb6BKOy25OOn86qrx1O7-PxOjyLEIcVuO77Qre6tSPvJYZiAjkwPQ=s1600",
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
