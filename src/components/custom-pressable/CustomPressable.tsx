import { Pressable } from "react-native";
import { colors } from "../../constants/colors";
import { CustomPressableProps } from "../../models/models";

const CustomPressable = ({ children, onPress }: CustomPressableProps) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: colors.lightgray, borderless: true, }}
    >
      {children}
    </Pressable>
  )
}

export { CustomPressable }