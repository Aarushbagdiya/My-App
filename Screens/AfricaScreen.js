import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class AfrciaScreen extends React.Component {
  render() {
    return (
      <View>     
       <View style={styles.buttonsContainer}>
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NigeriaScreen')}>
              <Text style={styles.text}>Nigeria</Text>
           </TouchableOpacity>
 
         <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('KenyaScreen')}>
              <Text style={styles.text}>Kenya</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SouthAfricaScreen')}>
              <Text style={styles.text}>South Africa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('UgandaScreen')}>
              <Text style={styles.text}>Uganda</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('EgyptScreen')}>
              <Text style={styles.text}>Egypt</Text> 
            </TouchableOpacity>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonsContainer: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 50,
    
    backgroundColor:'white',
  },
  buttons: {
    backgroundColor:'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 200,
    margin: 15,
    marginLeft: 10,
    width: 200,
    height: 60,
   


  },
  text:{
    color:'lime',
  }
});