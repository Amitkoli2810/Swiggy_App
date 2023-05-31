import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  
  const navigation = useNavigation()
  return (
    <View style={{ margin: 10 }}>
      <Pressable onPress={()=>navigation.navigate('Menu',{
        id:item.id,
        name:item.name,
        image:item.image,
        rating:item.rating,
        time:item.time,
        address:item.address,
        cost_for_two : item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu
      })} style={{ flexDirection: "row" }}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            source={{ uri: item.image }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
          >
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 10, right: 10 }}
              name="cards-heart-outline"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>-</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.time} mins
            </Text>
          </View>
          <Text style={{ fontSize: 15, marginTop: 6, color: "gray" }}>
            {item.address}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,
                marginTop: 3,
                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>

            <MaterialCommunityIcons
              name="bike-fast"
              size={24}
              color="black"
            />
            <Text style={{marginLeft:8,fontSize:16}}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
