import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: colors.white,
  },
  logoBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 42,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
  },
  dashboard: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightgray,
  },
  filterActive: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.red,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 14,
    height: 14,
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
    zIndex: 1,
  },
})