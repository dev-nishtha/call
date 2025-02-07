# Video Calling App with React Native and WebRTC

This project is a video calling app that allows users to:
- Register and log in using email and password.
- Search for other users by username.
- Initiate video calls using WebRTC.

The app is built with React Native (using Zustand for state management).

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)

---

## Features
- **User Authentication**:
  - Register and log in with email and password.
  - Persistent session using AsyncStorage.
- **Video Calling**:
  - Search for users by username.
  - Initiate WebRTC-based video calls.
- **State Management**:
  - Zustand for managing authentication and WebRTC states.
---

## Tech Stack
### Frontend
- **React Native**: For building the mobile app.
- **Zustand**: For state management.
- **React Navigation**: For navigation between screens.
- **React Native Paper**: For UI components.
- **react-native-webrtc**: For WebRTC integration.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-calling-app.git
   cd call/call-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a .env file
   ```bash
   VIDEOSDK_API_KEY=<your_videsosdk_api_key>
   ```
4. Start the development server:
   ```bash
   npx react-native start
   ```

5. Run the app on an emulator or physical device:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```