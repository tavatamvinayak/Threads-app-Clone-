import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import NewThread from "../screens/NewThread";
import Settings from "../screens/Settings";
import Followers from "../screens/Followers";
import ProfileTab from "../screens/UsersProfile";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewThread"
          component={NewThread}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Followers"
          component={Followers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UsersProfile"
          component={ProfileTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
