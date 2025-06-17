import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/theme";

export type BottomTabBarProps = {
  state: any;
  navigation: any;
};

const tabIcons: any = ["home", "image", "info"];

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const iconName = tabIcons[index] ?? "help";

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tab}
          >
            <MaterialIcons
              name={iconName}
              size={24}
              color={isFocused ? colors.primary : colors.gray}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 75,
    marginBottom: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabBar;
