import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "./styles.js"
// import { logout } from "./sessionStorage.js"
// import EncryptedStorage from 'react-native-encrypted-storage';

async function logout() {
  try {
    // Clear session token and other cached data
    // await EncryptedStorage.removeItem('session_token');
    // await EncryptedStorage.removeItem('refresh_token');
    console.log('Session tokens cleared.');

    // Additional cleanup if necessary (e.g., clear Redux store, query cache, etc.)

  } catch (error) {
    console.error('Error during logout:', error);
  }
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

function LoginScreen() {
  const navigation = useNavigation();
  const handleLogin = async () => {
    // await logout();
    navigation.replace("Main");
  };
  return (
    <View style={styles.homeScreen}>
      <Button title="Login" onPress={handleLogin}/>
      <Text>Test1!</Text>
      <View>
        <Text>Login</Text>
        <Text>Sample</Text>
      </View>
      <TextInputExample/>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await logout();
    navigation.replace("Login");
  };
  return (
    <View style={styles.homeScreen}>
      <Button title="Logout" onPress={handleLogout} />
      <Text>Home!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications</Text>
    </View>
  );
}

function FlightsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Flights!</Text>
    </View>
  );
}

function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contacts!</Text>
    </View>
  );
}

function DocumentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Documents!</Text>
    </View>
  );
}

function ReportsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Monthly Reports!</Text>
    </View>
  );
}

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

const BottomTabsNavigator = () => {
  return (
  <BottomTabs.Navigator>
  
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{ tabBarIcon: makeIconRender("home"),
        headerShown: false
      }}
    />
    <BottomTabs.Screen
      name="Contacts"
      component={ContactsScreen}
      options={{ tabBarIcon: makeIconRender("contacts"),
        headerShown: false
        }}
    />
    <BottomTabs.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ tabBarIcon: makeIconRender("bell"),
        tabBarBadge: 1,
        headerShown: false
      }}
    />

    {/* <BottomTabs.Screen
      name="Flights"
      component={FlightsScreen}
      options={{ tabBarIcon: makeIconRender("airplane") }}
    /> */}
    <BottomTabs.Screen
      name="Documents"
      component={DocumentsScreen}
      options={{ tabBarIcon: makeIconRender("file-document-outline") ,
        headerShown: false
      }}
    />
    <BottomTabs.Screen
      name="Reports"
      component={ReportsScreen}
      options={{ tabBarIcon: makeIconRender("comment-outline"),
        headerShown: false
        }}
    />
  </BottomTabs.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* BottomTabsNavigator encapsulates all tab screens */}
        <Stack.Screen
          name="Main"
          component={BottomTabsNavigator}
          options={{ headerShown: false }} // Hide the stack header for the tab navigator
        />

        {/* LoginScreen is part of the stack but not the bottom tabs */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the header for the login screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
