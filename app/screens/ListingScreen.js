import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Nice bag for sale",
    price: 100,
    image: require("../assets/bag.jpg"),
  },
  {
    id: 2,
    title: "Black chair in good condition",
    price: 300,
    image: require("../assets/chair.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"KES " + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.ligtGrey,
  },
});
export default ListingScreen;
