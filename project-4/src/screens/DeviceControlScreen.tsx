import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Brightness from "expo-brightness";
import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";
import * as Device from "expo-device";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { colors, spacing } from "../styles/theme";
import { ScrollView } from "react-native";

const DeviceControlScreen = () => {
  const [brightness, setBrightness] = useState<number>(0.5);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sound.mp3")
    );
    await sound.playAsync();
  };

  const changeBrightness = async (value: number) => {
    try {
      await Brightness.setBrightnessAsync(value);
      setBrightness(value);
    } catch (error) {
      console.warn("Brightness permission not granted");
    }
  };

  const vibrate = (type: "Light" | "Medium" | "Heavy") => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle[type]);
  };

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Device Information</Text>
        <Text>Model: {Device.modelName}</Text>
        <Text>
          OS: {Device.osName} {Device.osVersion}
        </Text>
        <Text>Platform: {Device.platformApiLevel}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Brightness Control</Text>
        <View style={styles.controlRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => changeBrightness(Math.max(0, brightness - 0.1))}
          >
            <MaterialIcons
              name="brightness-low"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
          <Text>{Math.round(brightness * 100)}%</Text>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => changeBrightness(Math.min(1, brightness + 0.1))}
          >
            <MaterialIcons
              name="brightness-high"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Vibraition</Text>
        <View style={styles.controlRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => vibrate("Light")}
          >
            <Text style={styles.buttonText}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => vibrate("Medium")}
          >
            <Text style={styles.buttonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => vibrate("Heavy")}
          >
            <Text style={styles.buttonText}>Heavy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sound</Text>
        <TouchableOpacity style={styles.button} onPress={playSound}>
          <Text style={styles.buttonText}>Play Sound</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    ...globalStyles.card,
    marginBottom: spacing.medium,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: spacing.small,
    color: colors.text,
  },
  controlRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.small,
  },
  button: {
    ...globalStyles.button,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    margin: 0,
  },
  buttonText: {
    ...globalStyles.buttonText,
  },
  iconButton: {
    padding: spacing.small,
  },
});

export default DeviceControlScreen;
