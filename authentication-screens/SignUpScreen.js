import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hi I am the sign up screen!</Text>
      <Button
        title="Sign up Verification Screen"
        onPress={() => navigation.navigate("Sign Up Verification Screen")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
