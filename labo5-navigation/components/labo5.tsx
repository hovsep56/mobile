import { Button, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle,FlatList, Pressable } from "react-native";
import { HexColor, rainbow} from "rainbow-colors-array-ts";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';


const Detail =()=>{
    const route: RouteProp<any> = useRoute();
    return(
        <View style={[{backgroundColor:route.params?.hex},styles.containerdetails]}>
            <Text>{route.params?.hex}</Text>
        </View>
    )
}
//flatlist is used to make page scrollable dont forget to use ()=> at the onPress to prevent infinite loops
const List=()=>{
    const navigation:any = useNavigation();
    let colors = rainbow(200,"hex",false);
    return(
            <View style={styles.container}>
                <FlatList data={colors} renderItem={(e)=>
                <Pressable onPress={()=>{navigation.push("Detail",{hex:e.item.hex})}}>
                    <View style={{backgroundColor:e.item.hex,height:50,margin:2}}></View>
                </Pressable>
            }/>
            </View>
    )
}
const Stack = createNativeStackNavigator();
export default function Labo5(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={List} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
       
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:"column"
    },
    containerdetails: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
  