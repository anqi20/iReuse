import React, { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BorrowStack from "./borrow-screens/BorrowStack";
import ReturnStack from "./return-screens/ReturnStack";
import ModalHomeStack from "./ModalHomeStack";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../assets/UserContext";
// import RewardsScreen from "./reward-screens/RewardsScreen";
import ModalRewardStack from "./reward-screens/ModalRewardStack";
import firebase from "../database/firebaseDB";
import { Image } from "react-native";
import { getCoins } from "./HomeApi";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({ route }) {
  // {
  //   console.log(route.params);
  // }
  const [coins, setCoins] = useState(0);

  // Get number of coins in user's account
  useEffect(() => {
    console.log("Getting current number of coins");
    // console.log(route.params);
    getCoins(route.params.id, setCoins);
  }, []);

  // Currently hardcoded, may change in the future
  function renderRewardsBadge() {
    // console.log(coins);
    const coin = coins;
    if (coin >= 50) {
      return true;
    } else {
      return null;
    }
  }

  const hasBadge = renderRewardsBadge();

  return (
    <UserContext.Provider value={route.params}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home") {
              if (focused) {
                return (
                  <Image
                    source={require("../assets/AppImages/focusedHome.png")}
                  />
                );
              } else {
                return (
                  <Image
                    source={require("../assets/AppImages/unfocusedHome.png")}
                  />
                );
              }
            } else if (route.name === "Borrow") {
              if (focused) {
                return (
                  <Image
                    source={require("../assets/AppImages/focusedBorrow.png")}
                  />
                );
              } else {
                return (
                  <Image
                    source={require("../assets/AppImages/unfocusedBorrow.png")}
                  />
                );
              }
            } else if (route.name === "Return") {
              if (focused) {
                return (
                  <Image
                    source={require("../assets/AppImages/focusedReturn.png")}
                  />
                );
              } else {
                return (
                  <Image
                    source={require("../assets/AppImages/unfocusedReturn.png")}
                  />
                );
              }
            } else if (route.name === "Reward") {
              if (focused) {
                return (
                  <Image
                    source={require("../assets/AppImages/focusedReward.png")}
                  />
                );
              } else {
                return (
                  <Image
                    source={require("../assets/AppImages/unfocusedReward.png")}
                  />
                );
              }
            }
          },
        })}
        tabBarOptions={{
          inactiveBackgroundColor: "black",
          activeBackgroundColor: "black",
          activeTintColor: "#EE8066",
          safeAreaInsets:{
            bottom: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={ModalHomeStack} />
        <Tab.Screen name="Borrow" component={BorrowStack} />
        <Tab.Screen name="Return" component={ReturnStack} />
        <Tab.Screen
          name="Reward"
          component={ModalRewardStack}
          options={{ tabBarBadge: hasBadge }}
        />
      </Tab.Navigator>
    </UserContext.Provider>
  );
}
