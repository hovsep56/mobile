import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/homescreen"
import labo4 from "./components/labo4"
import labo5 from "./components/labo5"

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false,tabBarActiveTintColor: "green",tabBarInactiveTintColor: "blue",}}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><FontAwesome name="home" color={color} size={size}/>}} />
        <Tab.Screen name="Labo4" component={labo4} options={{tabBarIcon:({color,size})=><MaterialIcons name="looks-4" color={color} size={size}/>}} />
        <Tab.Screen name="Labo5" component={labo5} options={{tabBarIcon:({color,size})=><MaterialIcons name="looks-5" color={color} size={size}/>}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
