import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const HomeScreen = () => {
  return (
    <View
      style={{
        ...globalStyles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={globalStyles.title}>React Native App</Text>
    </View>
  );
};

export default HomeScreen;
