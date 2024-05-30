# CompanionApp

I am using Linux (Ubuntu 20.0)

## Creating a react native app project

### Download dependencies

(From scratch)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22
npm install expo-cli --global
```
(These are copy+pasted from bash command history, not verified)
Verify the versions downloaded:
`npm -v` or `node -v`.

### Create the project
```
npm install create-react-native-app
npx create-react-native-app
```
(Answer the prompts, I used the preset 'with-tab-navigation')

## Running the app locally

```
npm start
```
This will start the server. A QR code should appear. You can press 'r' to refresh the server at any time, although it should auto-refresh.

### iOS
1. Find an iOS device.
1. Download 'Expo Go' app from the App Store.
1. Use the Camera app to scan the QR code.
1. If the simulator is unresponsive, you will likely need to toggle developer mode by typing 'm' on the server.

### Android
1. Find an Android device.
1. Download 'Expo' app from the Play store.
1. Use Expo to take a photo of the QR code

## Deployment
(To app stores)
TBD
