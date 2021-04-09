import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class EuropeScreen extends React.Component {
  render() {
    return (
      <View>
          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FranceScreen')}>
              <Text style={styles.text}>France</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('UKScreen')}>
              <Text style={styles.text}>UK</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SpainScreen')}>
              <Text style={styles.text}>Spain</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('PortugalScreen')}>
              <Text style={styles.text}>Portugal</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ItalyScreen')}>
              <Text style={styles.text}>Italy</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GermanyScreen')}>
              <Text style={styles.text}>Germany</Text>
            </TouchableOpacity>
            
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonsContainer: {
    color: 'blue',
    alignSelf: 'center',
    marginTop: 50,
    
    backgroundColor:'skyblue',
  },
  buttons: {
    backgroundColor:'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 200,
    margin: 15,
    marginLeft: 65,
    width: 200,
    height: 60,
   


  },
  text:{
    color:'lime',
  }
});