import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import MenuComponent from "./MenuComponent";

const FoodItems = ({ item }) => {
  const [selected, setSelected] = useState(["Recommended"]);
  const [dropdown, setDropdown] = useState(true);
  const data = [item];

  const handleItemSelect = (itemName) => {
    setDropdown(!dropdown);
    const itemSelected = selected.includes(itemName);
    if (itemSelected) {
      setSelected(selected.filter((sel) => sel !== itemName));
    } else {
      setSelected([...selected, itemName]);
    }
  };

  return (
    <View>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Pressable
            onPress={() => handleItemSelect(item.name)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name} ({item.items.length})
            </Text>

            {dropdown ? (
              item.name === "Recommended" ? (
                <AntDesign name="up" size={24} color="black" />
              ) : (
                <AntDesign name="down" size={24} color="black" />
              )
            ) : (
              item.name === "Recommended" ? (
                <AntDesign name="down" size={24} color="black" />
              ) : (
                <AntDesign name="up" size={24} color="black" />
              )
            )}
          </Pressable>
          {selected.includes(item.name) &&
            item.items.map((food, index) => (
              <MenuComponent food={food} key={index} />
            ))}
        </React.Fragment>
      ))}
    </View>
  );
};

export default FoodItems;

const styles = StyleSheet.create({});
