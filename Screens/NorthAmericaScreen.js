import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class NorthAmericaScreen extends React.Component {
  render() {
    return (
      <View>
          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('USAScreen')}>
              <Text style={styles.text}>USA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CanadaScreen')}>
              <Text style={styles.text}>Canada</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MexicoScreen')}>
              <Text style={styles.text}>Mexico</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CubaScreen')}>
              <Text style={styles.text}>Cuba</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JamaicaScreen')}>
              <Text style={styles.text}>Jamaica</Text>
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