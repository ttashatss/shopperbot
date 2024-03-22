# shopperbot
Department Store Recommendation System with Location-Based Chatbot Integration using LINE Chatbot and Generative Large Language Model

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [LINE Developer Account](https://developers.line.me/) and channel set up
- [ngrok](https://ngrok.com/download)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ttashatss/shopperbot

2. Navigate to this repository and install dependencies:
    ```bash
    cd shopperbot
    npm install

3. Set up your environment variables:
- Create a .env file in the root directory.
- Add your LINE Channel Access Token and Channel Secret:
  
    ```bash
    CHANNEL_ACCESS_TOKEN=your_access_token_here
    CHANNEL_SECRET=your_channel_secret_here

4. To start the bot,  run:

   ```bash
   npm start

5. On terminal, run:

   ```bash
   ngrok http http://localhost:3000

6. Copy the forwarding target to LINE Developer Console Webhook URL and add '/webhook' 
