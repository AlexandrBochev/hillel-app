import { Platform, StyleSheet, StatusBar } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    zIndex: 1,
  },
  scrollView: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})