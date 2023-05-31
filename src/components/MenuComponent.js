import { Image, ImageBackground, StyleSheet, Text, View,Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";
const MenuComponent = ({ food }) => {
 const dispatch = useDispatch()
 const [addItems,setAddItems]=useState(0)
 const [selected,setSelected]=useState(false)
  return (
    <View
      style={{
        height: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ margin: 20, width: "50%" }}>
        <Text style={{ fontSize: 22,marginBottom:6,fontWeight:'600' }}>{food.name}</Text>
        <Text style={{ fontSize: 20,marginBottom:10,fontWeight:'500' }}>
          <FontAwesome name="rupee" size={18} color="black" /> {food.price}
        </Text>
        <Text
          style={{
            marginTop: 5,
            borderRadius: 4,
            marginBottom:10
          }}
        >
          {[0, 0, 0, 0, 0].map((en, i) => (
            <FontAwesome
              // key={`${food.id}-${i}`}
              style={{ paddingHorizontal: 3 }}
              name={i < Math.floor(food.rating) ? "star" : "star-o"}
              size={15}
              color="#FFD700"
            />
          ))}
        </Text>
        <Text style={{fontSize:15,fontWeight:'400'}}>
          {food.description.length > 30
            ? food.description.substr(0, 30)
            : food.description}
        </Text>
      </View>
      <View style={{ marginBottom: 25,marginRight:20 }}>
        <Image
          source={{ uri: food.image }}
          style={{ width: 150, height: 150, borderRadius: 30 }}
        />
        
        {
          selected ? (
            <Pressable
              style={{
                position: "absolute",
                bottom: -25,
                left: 35,
                fontSize: 25,
                fontWeight: "900",
                color: "white",
                backgroundColor:'white',
                color:'red',flexDirection:'row',
                paddingVertical:10,paddingHorizontal:20,borderRadius:20
              }}
            >
              <Pressable onPress={() => {
                if(addItems === 1){
                  dispatch(removeFromCart(food))
                  setSelected(false)
                  setAddItems(0);
                }else{
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(food))

                }
              }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  {addItems}
                </Text>
              </Pressable>

              <Pressable onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(food))
              }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ):(
            <Text 
                onPress={()=>{
                  setSelected(true)
                  if(addItems==0){
                    setAddItems((c)=>c+1)
                  }
                  dispatch(addToCart(food))
                }}
                style={{
                  position: "absolute",
                  bottom: -25,
                  left: 35,
                  fontSize: 25,
                  fontWeight: "900",
                  color: "white",
                  backgroundColor:'white',
                  color:'red',
                  paddingVertical:10,paddingHorizontal:20,borderRadius:20
                }}
              >
                ADD
              </Text>
          )
        }
      </View>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({});
