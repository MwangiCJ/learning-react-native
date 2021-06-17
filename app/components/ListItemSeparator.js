import React from "react";
import colors from "../config/colors";
import { View } from "react-native";

function ListItemSeparator(props) {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colors.ligtGrey,
      }}
    />
  );
}

export default ListItemSeparator;
