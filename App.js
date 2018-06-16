import React from 'react';
import { StyleSheet, Text, Slider, View } from 'react-native';

export default class App extends React.Component {



state = {Texto: "hola"}
state2 = {cambio: "chau"}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.paragraph}>
              {this.state.Texto} 
        </Text>
        <Slider
          style={{width: 300, height: 30, borderRadius: 50}}
          minimumValue={0}
          maximumValue={10}
          value={0}
          onValueChange={(value)=> this.setState({ Texto: this.state2.cambio}) }
          // creo que lo estoy usando mal. Esto lo podría hacer con el Switch
          maximumTrackTintColor='red'  
          minimumTrackTintColor='blue'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  sliderActivo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
