import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from '../data/hotels'
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
    const data = hotels
    
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Restaurant item or more"
        />
        <Feather name="search" size={24} color="#E52B50" />
      </View>
      <Carousel />
      <FoodTypes />
      <QuickFood />
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 30,
          justifyContent: "center",
          width:100
        }}
      >
        <Text style={{marginRight:6}}>Filter</Text>
        <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 30,
          justifyContent: "center",
        }}
      >
        <Text>Sort By Rating</Text>
        
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 30,
          justifyContent: "center",
        }}
      >
        <Text>Sort By Price</Text>
        
      </Pressable>
      </View>
      {
        data.map((item,index)=>(
            <MenuItem key={index} item={item}/>
        ))
      }
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
