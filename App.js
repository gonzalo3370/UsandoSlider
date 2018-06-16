import React from 'react';
import { StyleSheet, Text, Slider, View } from 'react-native';

export default class App extends React.Component {

state = {slideValue: 0 }
state = {Texto: "Hola"}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.paragraph} >{this.state.Texto} </Text>
        <Slider
          style={{width: 300, height: 30, borderRadius: 50}}
          minimumValue={0}
          maximumValue={10}
          value={this.state.slideValue}
          onValueChange={(value)=> this.setState({ Texto: "value"}) }
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
});
