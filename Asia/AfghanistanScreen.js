import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Linking } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class AfghanistanScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
              style={styles.buttons}
           onPress={() =>Linking
  .openURL('https://www.timeanddate.com/worldclock/Afghanistan')
  .catch(err => console.error('Error', err))}>
              <Text style={styles.text}>Time</Text>
           </TouchableOpacity> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  buttons: {
    backgroundColor:'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 200,
    margin: 200,
    marginLeft:65,
    width: 200,
    height: 60,
   
 

  },
  text:{
    color:'lime',
  }
});