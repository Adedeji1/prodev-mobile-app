import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  /* =====================
     Search Section
  ====================== */

  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 32,
    padding: 8,
  },

  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 12,
  },

  searchFormText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  searchControl: {
    marginTop: 4,
    fontSize: 13,
    color: "#555",
  },

  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ff385c",
    alignItems: "center",
    justifyContent: "center",
  },

  /* =====================
     Filter Section
  ====================== */

  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 16,
  },

  filterContainer: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  /* =====================
     Listings Section
  ====================== */

  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  paginationContainer: {
    paddingVertical: 24,
    alignItems: "center",
  },

  showMoreButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#000",
    borderRadius: 24,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
