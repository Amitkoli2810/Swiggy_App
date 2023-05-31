import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const CartScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const [addItems, setAddItems] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  // Update the header name and style
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      headerStyle: {
        height: 80, // Set the desired height in pixels
        backgroundColor: "transparent",
      },
    });
  }, []);

  return (
    <ScrollView>
      {total > 0 ? (
        <>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              margin: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Ordering for Someone else?
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
              Add Details
            </Text>
          </View>
          <View>
            <View
              style={{
                padding: 10,
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", width: "28%" }}
                  >
                    {item.name}
                  </Text>
                  <Pressable
                    style={{
                      fontSize: 25,
                      fontWeight: "900",
                      color: "white",
                      backgroundColor: "white",
                      color: "red",
                      flexDirection: "row",
                      paddingVertical: 3,
                      paddingHorizontal: 15,
                      borderRadius: 10,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "gray",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        if (addItems === 1) {
                          dispatch(removeFromCart(item));

                          setAddItems(0);
                        } else {
                          setAddItems((c) => c - 1);
                          dispatch(decrementQuantity(item));
                        }
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 25,
                          color: "green",
                          paddingHorizontal: 6,
                          textAlign: "center",
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
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        setAddItems((c) => c + 1);
                        dispatch(incrementQuantity(item));
                      }}
                    >
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
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="rupee" size={16} color="black" />{" "}
                    {item.quantity * item.price}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <Text style={{ fontSize: 17, fontWeight: "500", marginLeft: 10 }}>
            Delivery Instructions
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <View
              style={{
                width: 100,
                backgroundColor: "white",
                height: 100,
                marginHorizontal: 10,
                paddingLeft: 10,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Feather
                name="bell"
                size={24}
                color="gray"
                style={{ marginBottom: 10 }}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                Avoid Ringing
              </Text>
            </View>
            <View
              style={{
                width: 100,
                backgroundColor: "white",
                height: 100,
                marginHorizontal: 10,
                paddingLeft: 10,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <FontAwesome5
                name="door-open"
                size={24}
                color="black"
                style={{ marginBottom: 10 }}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                Leaver at the door
              </Text>
            </View>
            <View
              style={{
                width: 100,
                backgroundColor: "white",
                height: 100,
                marginHorizontal: 10,
                paddingLeft: 10,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <MaterialIcons
                name="directions"
                size={24}
                color="black"
                style={{ marginBottom: 10 }}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                Direction to reach
              </Text>
            </View>
            <View
              style={{
                width: 100,
                backgroundColor: "white",
                height: 100,
                marginHorizontal: 10,
                paddingLeft: 10,
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Feather
                name="phone-call"
                size={24}
                color="black"
                style={{ marginBottom: 10 }}
              />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                Avoid Calling
              </Text>
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Biling Details
          </Text>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>
                Item Total
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                <FontAwesome name="rupee" size={13} color="black" />{" "}
                {total + 65.3}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>
                Delivery Fee | 1.2 Kms
              </Text>
              <Text style={{ color: "red", fontSize: 15, fontWeight: "700" }}>
                FREE
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "gray",
                marginTop: 10,
              }}
            >
              Free Delivery On Your Order
            </Text>

            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: "100%",
              }}
            ></Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>
                Delivery Tip
              </Text>
              <Text style={{ color: "red", fontSize: 15, fontWeight: "700" }}>
                Add Tip
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "400", color: "gray" }}>
                Taxes and Charges
              </Text>
              <Text style={{ color: "red", fontSize: 15, fontWeight: "700" }}>
                65.3
              </Text>
            </View>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: "100%",
              }}
            ></Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>To Pay</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                <FontAwesome name="rupee" size={14} color="black" />{" "}
                {total + 65.3}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: 10,
              marginVertical: 10,
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                <FontAwesome name="rupee" size={14} color="black" />
                {total + 65.3}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500", color: "gray" }}>
                View Detailed Bill
              </Text>
            </View>
            <Text
              onPress={() => {
                navigation.navigate("Loading");
                dispatch(clearCart());
              }}
              style={{
                backgroundColor: "green",
                paddingVertical: 20,
                paddingHorizontal: 30,
                borderRadius: 10,
                color: "white",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Proceed To Pay
            </Text>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
          >
            Your Cart Is Empty
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
