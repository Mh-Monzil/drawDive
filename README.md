# DrawDive

Welcome to **DrawDive** — your ultimate portal for drawing and painting. Dive into our vibrant collection of art supplies and inspirations!

**Live Site URL:** [Visit DrawDive](https://draw-dive.web.app/)

## Key Features

- **Dynamic Banner with Slider:** Showcases featured artworks, offers, and inspirational content on the home page.
- **Comprehensive Craft Section:** Find all the tools and materials you need for your art projects in one place.
- **Easy Navigation Through Categories:** Click any category on the home page to explore items related to that category.
- **Community Testimonials:** Gain insights from the experiences shared by other artists who use our products.
- **Secure and Private Additions:** Logged-in users can safely add new items to the website, enhancing our collection.


## Installation Instructions

To get Tourio up and running on your local machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Firebase account


### Frontend Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mh-monzil/drawDive.git
    cd altChoice
    ```

2. **Navigate to the frontend directory:**
    ```sh
    cd client
    ```

3. **Install frontend dependencies:**
    ```sh
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `frontend` directory and add your environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

5. **Run the frontend development server:**
    ```sh
    npm start
    ```

### Backend Setup

1. **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

2. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

3. **Run the backend server:**
    ```sh
    npm start
    ```


### Deploy

To deploy, follow the standard practices for deploying Node.js backend and React frontend applications. You can use services like Heroku, Vercel, Netlify, or Firebase Hosting.

---

Now, you should have scholarVista running locally on your machine.
