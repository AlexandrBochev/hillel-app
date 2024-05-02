import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  pressable: {
    height: '10%',
  },
  centeredView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: 20,
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
})