import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 3,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  img: {
    width: 92,
    height: 92,
    borderRadius: 6,
  },
  newBlock: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 18,
    borderColor: colors.white,
    borderWidth: 2,
    shadowColor: colors.black,
    elevation: 3,
  },
  new: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "bold",
    transform: [{ rotate: "-20deg" }],
  },
  title: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "bold",
  },
  price: {
    flexDirection: "row",
    gap: 4,
    alignItems: 'flex-end'
  },
  newPrice: {
    color: colors.dark,
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    color: "gray",
    fontSize: 12,
    textDecorationLine: "line-through",
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    maxWidth: 160,
    color: colors.gray,
  },
  btn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    overflow: "hidden",
    borderRadius: 6,
  },
  buy: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  buyText: {
    color: colors.blue,
    fontWeight: "bold",
  },
  heart: {
    position: "absolute",
    top: 16,
    right: 16,
  },
})