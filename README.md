# NewsMonkey

NewsMonkey is a modern, responsive, and dynamic news application built with React. It fetches real-time news headlines from across the globe using the [NewsAPI](https://newsapi.org/) and features a stunning, animated user interface.

## Features

- **Real-Time News:** Fetches top headlines across various categories (Business, Entertainment, Health, Science, Sports, Technology).
- **Global Search:** Built-in search functionality utilizing NewsAPI's `/v2/everything` endpoint to find articles on specific topics worldwide.
- **Premium Aesthetics:** Features a sleek dark theme, glassmorphic navigation, and a vibrant Cyan/Emerald gradient color palette.
- **Interactive Animations:** Integrates custom CSS spinners and interactive mesh-gradient hover effects (BorderGlow) on news cards for a highly engaging user experience.
- **Vercel Ready:** Includes a custom Node.js Serverless Function proxy (`api/news.js`) to securely bypass NewsAPI's free-tier `localhost` restriction, allowing for flawless deployment to Vercel.

## Tech Stack

- **Frontend:** React.js, Bootstrap 5, Custom CSS Variables
- **Backend Proxy (Vercel):** Node.js Serverless Functions
- **API:** NewsAPI

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/piyushmarkandey1-ui/NewsMonkey.git
   ```
2. Navigate into the directory:
   ```bash
   cd NewsMonkey
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment

This project is pre-configured for deployment on **Vercel**. 
Simply link this repository to your Vercel account, and the included `vercel.json` and `/api` folder will automatically handle the routing and serverless proxy for the NewsAPI integration.
