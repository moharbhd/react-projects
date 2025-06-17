import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.large,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.large,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.large,
    marginBottom: spacing.medium,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.medium,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
