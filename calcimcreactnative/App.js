import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: '' };
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;
    if (s.resultado < 18.5) {
      s.resultadoText = 'Abaixo do Peso';
    } else if (s.resultado < 25) {
      s.resultadoText = 'Peso Normal';
    } else if (s.resultado < 30) {
      s.resultadoText = 'Sobrepeso';
    } else if (s.resultado < 35) {
      s.resultadoText = 'Obesidade grau I';
    } else if (s.resultado < 40) {
      s.resultadoText = 'Obesidade grau II';
    } else {
      s.resultadoText = 'Obesidade Grau III';
    }
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Calcule seu IMC</Text>
        <Card style={styles.caixa2}>
          <TextInput style={styles.caixatxt} placeholder="Altura" onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput style={styles.caixatxt} placeholder="Peso" onChangeText={(massa)=>{this.setState({massa})}}/>
          <View style={styles.botao}></View>
           <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>

         <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

        </Card>
      </View>
    );
  }
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
    textTransform: 'uppercase',
    color: '#d8f3dc',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },

  caixatxt: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  caixa2: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#40916c',
  },
 button:{
   backgroundColor:"#2d6a4f",
   width:240,
  alignSelf:"center"
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"#fff",
  },
  resultado:{
    alignSelf:"center",
    color:"white",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },

});
