import { Platform, StyleSheet, StatusBar } from "react-native"

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    width: 100,
    height: 40,
    zIndex: 1,
  },
  scrollView: {
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})