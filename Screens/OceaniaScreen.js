import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class OceaniaScreen extends React.Component {
  render() {
    return (
      <View>
          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AustraliaScreen')}>
              <Text style={styles.text}>Australia</Text>
            </TouchableOpacity>
            
              <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewZealandScreen')}>
              <Text style={styles.text}>New Zealand</Text>
 </TouchableOpacity>
                <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FijiScreen')}>
              <Text style={styles.text}>Fiji</Text>
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