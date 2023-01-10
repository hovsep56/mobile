import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer,useNavigation } from "@react-navigation/native";

export default function Home () {
    const navigation:any = useNavigation();
    return(
        <View style={styles.container}>
        <Text>Rainbows</Text>
        <Button title="Labo 5" onPress={()=>{navigation.navigate("Labo5")}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

