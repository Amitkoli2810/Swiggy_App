import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FoodItems from "../components/FoodItems";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  
  const route = useRoute();
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };
    fetchMenu();
  }, [route.params]);
  
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ScrollView style={total===0 ? styles.main2 : styles.main}>
        <View
          style={{
            height: 300,
            backgroundColor: "#B0C4DE",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Ionicons
              onPress={() => navigation.navigate("Home")}
              name="arrow-back"
              size={28}
              color="black"
            />
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Ionicons name="search" size={24} color="black" />
              <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: "500" }}>
                Search
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "white",
                height: 220,
                marginHorizontal: 40,
                marginVertical: 10,
                padding: 10,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="share" size={30} color="green" />
                  <EvilIcons
                    style={{ marginLeft: 10 }}
                    name="heart"
                    size={35}
                    color="black"
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text
                  style={{ fontSize: 20, marginLeft: 5, fontWeight: "500" }}
                >
                  {route.params.rating}
                </Text>
                <Text style={{ fontSize: 20, marginLeft: 5 }}>
                  <Entypo name="dot-single" size={15} color="black" />
                </Text>
                <Text
                  style={{ fontSize: 20, marginLeft: 5, fontWeight: "500" }}
                >
                  {route.params.time}mins
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 17, color: "grey" }}>
                  {route.params.cuisines}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: "600" }}>Outlet</Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  {route.params.address}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: "600" }}>
                  {route.params.time}
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Home
                </Text>
              </View>
              <View style={{ borderBottomWidth: 1, marginTop: 5 }}></View>
              <View
                style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}
              >
                <MaterialCommunityIcons
                  name="bike-fast"
                  size={24}
                  color="green"
                />
                <Text style={{ fontSize: 15, marginLeft: 8, color: "gray" }}>
                  0-3 Kms |{" "}
                  <Text style={{ fontWeight: "500", color: "black" }}>
                    35 Delivery Fee will apply
                  </Text>{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            marginVertical: 6,
          }}
        >
          MENU
        </Text>
        <View
          style={{ borderBottomWidth: 1, borderColor: "gray", marginTop: 5 }}
        ></View>
        {route.params.menu?.map((item, index) => (
          <FoodItems item={item} key={index} />
        ))}
      </ScrollView>
      <Pressable
        onPress={toggleModal}
        style={{
          height: 60,
          borderRadius: 40,
          width: 60,
          justifyContent: "center",
          backgroundColor: "black",
          marginLeft: "auto",
          position: 'absolute',
          bottom: 100,
          left: 25,
          alignContent: "center",
        }}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "500" }}
        >
          MENU
        </Text>
      </Pressable>
      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 100,
            right: 10,
            borderRadius: 10,
          }}
        >
          {menu.map((item, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Text
                style={{ color: "#D0D0D0", fontSize: 19, fontWeight: "600" }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontSize: 19, fontWeight: "600" }}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>
      {total === 0 ? null : (
          <View
            style={{
              backgroundColor: "#ba968d",
              height: 70,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems:'center',
              position:'absolute',bottom:10,
              marginHorizontal:20,
              width:'90%'
            }}
          >
            <View>
              <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>{cart.length} Items | {total}</Text>
              <Text style={{color:'white',fontSize:14,fontWeight:'400',marginTop:3}}>Extra Charges may apply</Text>
            </View>
            <Text onPress={()=>navigation.navigate('Cart',{
              name:route.params.name,
              total:total
            })} style={{color:'white',fontSize:15,fontWeight:'500'}}>View Cart</Text>
          </View>
        
      )}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  main:{
    marginTop:50,
    marginBottom:80
  },
  main2:{
    marginTop:50
  }
});
