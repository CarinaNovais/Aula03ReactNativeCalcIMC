import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>Calcule seu IMC</Text>
      <Card style={styles.caixa2}>
        <TextInput style={styles.caixatxt} 
        placeholder="Altura"/>
        <TextInput style={styles.caixatxt}
        placeholder="Peso"/>
        <View style={styles.botao}>
          <Button title='Calcular'
          color="#74c69d"/>
        </View>
        <TextInput style={styles.caixatxt} 
        placeholder="Resultado"
       editable = {false}/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2d6a4f',
    padding: 8,
  },
  paragraph: {
    textTransform: "uppercase",
    color: '#d8f3dc',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15
  
  },

  caixatxt:{
    height:40,
    margin:15,
    borderWidth:1,
    padding:10,
    backgroundColor:'#fff',
    borderRadius:5
  
  },
  caixa2:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#40916c'

  },
  botao:{
    marginLeft:15,
    marginRight:15
  },

 
});
