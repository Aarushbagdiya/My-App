import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class SouthAmericaScreen extends React.Component {
  render() {
    return (
      <View>
          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BrazilScreen')}>
              <Text style={styles.text}>BrazilScreen</Text>
            </TouchableOpacity>

              <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ArgentinaScreen')}>
              <Text style={styles.text}>Argentina</Text>
            </TouchableOpacity>

              <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('PeruScreen')}>
              <Text style={styles.text}>Peru</Text>
            </TouchableOpacity>

              <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ColombiaScreen')}>
              <Text style={styles.text}>USA</Text>
            </TouchableOpacity>

              <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ChileScreen')}>
              <Text style={styles.text}>Chile</Text>
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