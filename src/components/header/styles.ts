import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 20,
    backgroundColor: colors.white,
  },
  logo: {
    width: 142,
    height: 60,
  },
  title: {
    fontSize: 16,
    color: colors.gray,
  },
})