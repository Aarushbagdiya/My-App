import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Linking} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Header } from 'react-native-elements';
import Constants from 'expo-constants';
import AfricaScreen from '../Screens/AfricaScreen';
import AsiaScreen from '../Screens/AsiaScreen';
import EuropeScreen from '../Screens/EuropeScreen';
import NorthAmericaScreen from '../Screens/NorthAmericaScreen';
import OceaniaScreen from '../Screens/OceaniaScreen';
import SouthAmericaScreen from '../Screens/SouthAmericaScreen';




export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'World Clock',
            styles: { color: '#fff', fontSize: 50 },
          }}
        />
        <View styles={styles.buttonsContainer}>
         <TouchableOpacity
         style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AfricaScreen')}>
              <Text style={styles.text}>Africa</Text>
            
           </TouchableOpacity>
 
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AsiaScreen')}>
              <Text style={styles.text}>Asia</Text>
            </TouchableOpacity>

            <TouchableOpacity         
                 style={styles.buttons}
              onPress={() => this.props.navigation.navigate('EuropeScreen')}>
              <Text style={styles.text}>Europe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NorthAmericaScreen')}>
              <Text style={styles.text}>North America</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OceaniaScreen')}>
              <Text style={styles.text}>Oceania</Text>
            </TouchableOpacity>
            
             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SouthAmericaScreen')}>
              <Text style={styles.text}>South America </Text> 
            </TouchableOpacity>
   

      </View>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
   Africa:AfricaScreen,  
   Asia:AsiaScreen,
   Europe:EuropeScreen,
   Oceania:OceaniaScreen,
   SouthAmerica:SouthAmericaScreen,
   NorthAmerica:NorthAmericaScreen,
});

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