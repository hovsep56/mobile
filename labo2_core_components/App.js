import React from "react";
import { Text, View, StyleSheet, Button,Image,TextInput,Alert, Pressable} from "react-native";


const Pokemon=()=>{
  return(
    <View>
      <Pressable delayLongPress={3000} onLongPress={()=>Alert.alert("Alert", "PIKACHU!!!")}>
        <Image style={styles.image} source={require("./assets/Pikachu.png")}></Image>
      </Pressable>
      <Image style={styles.image} source={{uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"}}></Image>
    </View>
  )
}


const App = () => {
  let random = Math.floor(Math.random()*10)+1
  return (
    <View style={styles.container}>
      <Text>Het getal is: <Text style={styles.boldtext}>{random}</Text></Text>
      
      <View style={styles.subviewstyle}><Text style = {styles.textstyle}>Subview</Text></View>
      <Pokemon/>
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password" onSubmitEditing={(e)=>{Alert.alert("Alert",e.nativeEvent.text)}}></TextInput>
      <Button color={"red"} title="Random" style={styles.buttonstyle} onPress={()=>{Alert.alert("Alert", `The number is: ${random}`)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: "#ff",
  },
  boldtext:{

    fontWeight: "bold"
  },
  image:{
    height:100,
    width:100
  },
  subviewstyle:{
    width:100,
    borderColor: "red",
    borderWidth:2,
    padding:10
  },
  textstyle:{
    backgroundColor: "blue",
    color:"white"
  },
  input:{
    borderColor:"black",
    borderWidth:2
  },
});

export default App;