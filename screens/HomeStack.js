import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import SettingsStack from "../settings-screens/SettingsStack";
import RewardsScreen from "./RewardsScreen";
import StatsScreen from "./StatsScreen";
import TutorialScreen from "../settings-screens/TutorialScreen";
import SuccessfulRedemptionScreen from "./SuccessfulRedemptionScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings Stack" component={SettingsStack} />
      <Stack.Screen name="Rewards Screen" component={RewardsScreen} />
      <Stack.Screen name="Stats Screen" component={StatsScreen} />
      <Stack.Screen name="How to use?" component={TutorialScreen} />
      {/* <Stack.Screen
        name="Successful Redemption Screen"
        component={SuccessfulRedemptionScreen}
      /> */}
    </Stack.Navigator>
  );
}
