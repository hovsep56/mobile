import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable,Alert } from 'react-native';




const app =()=> {
  let movies = [{
    name:"Pikachu",url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",year:1980
  },{
    name:"vaporeon",url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",year:1981
  },{
    name:"Snorlax",url:"https://img.pokemondb.net/artwork/large/snorlax.jpg",year:1982
  },{
    name:"Blastoise",url:"https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png",year:1983
  },{
    name:"wartortle",url:"https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png",year:1984
  },{
    name:"Raichu",url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",year:1985
  }
]

  //finish it after im done with all labos
  let random1 = Math.floor(Math.random()*6)
  let random2 = Math.floor(Math.random()*6)
  let random3 = Math.floor(Math.random()*6)
  let random4 = Math.floor(Math.random()*6)
  let random5 = Math.floor(Math.random()*6)
  let random6 = Math.floor(Math.random()*6)

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random1].name} year: ${movies[random1].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random1].url}}></Image>
      </Pressable>
      <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random2].name} year: ${movies[random2].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random2].url}}></Image>
        </Pressable>
        <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random3].name} year: ${movies[random3].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random3].url}}></Image>
        </Pressable>
        <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random4].name} year: ${movies[random4].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random4].url}}></Image>
        </Pressable>
        <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random5].name} year: ${movies[random5].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random5].url}}></Image>
        </Pressable>
        <Pressable onPress={()=>Alert.alert("Details",`name: ${movies[random6].name} year: ${movies[random6].year}`)}>
        <Image style={styles.imagestyle} source={{uri: movies[random6].url}}></Image>
        </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
  imagestyle:{
    height:50,
    width:50
  }
});


export default app