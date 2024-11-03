import { View, StyleSheet, Text } from "react-native";
import { theme } from "@/theme";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.white,
  },
});
