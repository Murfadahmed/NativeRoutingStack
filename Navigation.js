// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./components/LoginForm"; // Import your LoginForm component
import SignUpForm from "./components/SignUpForm"; // Import your SignUpForm component
import App from "./App";
import HomePage from "./components/HomePage";

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="Home" component={HomePage} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
