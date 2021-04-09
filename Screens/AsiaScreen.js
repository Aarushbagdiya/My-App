import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class AsiaScreen extends React.Component {
  render() {
    return (
      <View>
      
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('IndiaScreen')}>
              <Text style={styles.text}>India</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ChinaScreen')}>
              <Text style={styles.text}>China</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SouthKoreaScreen')}>
              <Text style={styles.text}>South Korea</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('PakistanScreen')}>
              <Text style={styles.text}>Pakistan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SaudiScreen')}>
              <Text style={styles.text}>Saudi Arabia</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('RussiaScreen')}>
              <Text style={styles.text}>Russia</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AfghanistanScreen')}>
              <Text style={styles.text}>Afghanistan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SriLankaScreen')}>
              <Text style={styles.text}>Sri Lanka</Text>
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