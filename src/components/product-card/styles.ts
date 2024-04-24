import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    elevation: 3,
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
    backgroundColor: "green",
    borderRadius: 18,
    borderColor: "#fff",
    borderWidth: 2,
    shadowColor: "#000",
    elevation: 3,
  },
  new: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    transform: [{ rotate: "-20deg" }],
  },
  title: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  price: {
    flexDirection: "row",
    gap: 4,
    alignItems: 'flex-end'
  },
  newPrice: {
    color: "#333",
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
    color: "gray",
  },
  buy: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "green",
  },
  buyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  heart: {
    position: "absolute",
    top: 16,
    right: 16,
  },
})