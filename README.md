# CompanionApp

I am using Linux (Ubuntu 20.04)
In VSCode, you can render Markdown side-by-side by doing `Ctrl+K, V`

## Setting Up React Native Expo Project

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
$ npm install create-react-native-app
$ npx create-react-native-app
```

(Answer the prompts, I used the preset 'with-tab-navigation')

### Maintenance - Upgrading Expo Version

https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/

```
$ npx expo install expo@latest
```

Fix dependencies:

```
$ npx expo install --fix
```

If there are any issues, you are usually prompted to run:

```
$ npm audit
$ npm audit fix
```

## Deployment

### Running the app locally (Expo Go)

```
$ npm start
```

This will start the server. A QR code should appear. You can press 'r' to refresh the server at any time, although it should auto-refresh.

#### iOS

1. Find an iOS device.
1. Download 'Expo Go' app from the App Store.
1. Use the Camera app to scan the QR code.
1. If the simulator is unresponsive, you will likely need to toggle developer mode by typing 'm' on the server.

#### Android

1. Find an Android device.
1. Download 'Expo' app from the Play store.
1. Use Expo to take a photo of the QR code

### Publish to App Stores

(To iOS App Store, Google Play Store)
TBD

## Design

### Icons

Sample icons available here: https://static.enapter.com/rn/icons/material-community.html

# Future Development:

- Add session token logic (device)
  - store natively on device
  - Problems with Expo and react-native-encrypted-storage: https://github.com/emeraldsanto/react-native-encrypted-storage/issues/34
- Incorporate "STATEFULNESS"
  - Watch this guy's video
  - session token logic is important here
- Play around with firebase
  - Add and erase native device id
  - Read/unread notifications
  - Query unread for badge alert
- Contacts
  - Contact card - natively add to contacts
- Documents
  - native document image/pdf query and preview/display
- Monthly Report
  - Expand/collapse text fields when active
  - cache until SUCCESSFUL submission
- Login Screen
  - Natively store credentials with biometrics
