import React from 'react';
import { StyleSheet, Text, Slider, View } from 'react-native';

export default class App extends React.Component {

state = {numero: 115599}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{color: this.state.numero}} >
           {this.state.numero}
        </Text>        
        <Slider
          style={{width: 300, height: 30, borderRadius: 50}}
          minimumValue={115599}
          maximumValue={999999}
          value={this.state.numero}
          onValueChange={(value)=> this.setState({ numero: value}) }
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
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});
