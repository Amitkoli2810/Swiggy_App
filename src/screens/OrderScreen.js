import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment/moment'
import { useNavigation } from '@react-navigation/native'

const OrderScreen = () => {
  const navigation = useNavigation()
  const time = moment().format('LT')
  return (
    <SafeAreaView>
      <View style={{margin:20,alignItems:"center",backgroundColor:'red',padding:30,borderRadius:20}}>
        <View>
          <Text style={{fontSize:19,fontWeight:"bold",margin:10,color:'white'}}>Delivery in 20 Mins</Text>
          <Text style={{fontSize:19,fontWeight:"bold",margin:10,color:'white'}}>Order Place At {time}</Text>
        </View>
        
      </View>
      <Pressable onPress={()=>navigation.navigate('Home')} style={{marginTop:350,alignItems:'center',backgroundColor:'#ab9a6a',padding:20,borderRadius:30,marginHorizontal:50}}>
          <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Go To Home Page</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})