# React Twitter Clone

<img src="https://github.com/Shaban-Eissa/React-Twitter-Clone/assets/49924090/7ab4de0d-f570-42f9-baf5-a70d747d9340" width="300" height="300" />


A Twitter clone built with React, Firebase, Material-ui. This project aims to replicate the core feature of Twitter where allowing users to post tweets.

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)

## Features

* **Tweeting:** Post tweets, complete with text and images, and view tweets from other users.
* **Real-time Updates:** Real-time updates for tweets.



## Demo

<img src="https://github.com/Shaban-Eissa/React-Twitter-Clone/assets/49924090/4d4f996b-be06-47f5-8cf1-00c682970eff" width="900" height="380" />
<br/><br/>
Check out the live demo 


## Installation

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/Shaban-Eissa/React-Twitter-Clone.git
    ```
    
2. **Install dependencies:**
    
    ```bash
    cd React-Twitter-Clone
    npm install
    ```
    
3. **Set up Firebase:**
    
    * Create a Firebase project: Go to the [Firebase Console](https://console.firebase.google.com/), click on "Add Project," and follow the setup instructions.
        
    * Get Firebase configuration:
        
        * In the Firebase Console, navigate to your project settings.
        * Under the "General" tab, scroll down to the "Your apps" section.
        * Click on the web app icon (</>) to create a new web app.
        * Copy the Firebase configuration object.
    * Configure the React app:
        
        * In your React app, locate the Firebase configuration file (e.g., `src/Firebase.js`).
        * Replace the placeholder values with the Firebase configuration values you copied.
        
        Example Firebase configuration file:
        
        ```javascript
        // src/Firebase.js
        
        const firebaseConfig = {
          apiKey: 'YOUR_API_KEY',
          authDomain: 'YOUR_AUTH_DOMAIN',
          projectId: 'YOUR_PROJECT_ID',
          storageBucket: 'YOUR_STORAGE_BUCKET',
          messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
          appId: 'YOUR_APP_ID',
        };
        
        export default firebaseConfig;
        ```
        
4. **Run the application:**
    
    ```bash
    npm start
    ```
    
    The application will be accessible at `http://localhost:3000`.
    
    

## Usage


1. **Post Tweets:**
    
    post tweets from the home page.
    
    
4. **Real-time Interactions:**
    
    Experience real-time updates for tweets as they happen.
    

## Technologies Used

* **Frontend:**
    
    * React
    * Material-ui
    
* **Backend:**
    
    * Firebase
      

## Contributing

Contributions are welcome.
