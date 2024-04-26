import { Pressable } from "react-native";
import { colors } from "../../constants/colors";

interface CustomPressableProps {
  children: React.ReactNode
  onPress: () => void
}

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