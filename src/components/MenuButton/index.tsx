import { Pressable, Text, View } from "react-native";
import { MenuButtonProps } from "./menuButton";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";
import { styles } from "./styles";

export default function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.pressable}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
