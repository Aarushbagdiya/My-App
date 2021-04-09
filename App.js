import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './Screens/HomeScreen';
import AfricaScreen from './Screens/AfricaScreen';
import AsiaScreen from './Screens/AsiaScreen';
import EuropeScreen from './Screens/EuropeScreen';
import NorthAmericaScreen from './Screens/NorthAmericaScreen';
import OceaniaScreen from './Screens/OceaniaScreen';
import SouthAmericaScreen from './Screens/SouthAmericaScreen';
import EgyptScreen from './Africa/EgyptScreen';
import NigeriaScreen from './Africa/NigeriaScreen';
import KenyaScreen from './Africa/KenyaScreen';
import SouthAfricaScreen from './Africa/SouthAfricaScreen';
import UgandaScreen from './Africa/UgandaScreen';
import AfghanistanScreen from './Asia/AfghanistanScreen';
import ChinaScreen from './Asia/ChinaScreen';
import IndiaScreen from './Asia/IndiaScreen';
import PakistanScreen from './Asia/PakistanScreen';
import RussiaScreen from './Asia/RussiaScreen';
import SaudiScreen from './Asia/SaudiScreen';
import SouthKoreaScreen from './Asia/SouthKoreaScreen';
import SriLankaScreen from './Asia/SriLankaScreen';
import FranceScreen from './Europe/FranceScreen';
import GermanyScreen from './Europe/GermanyScreen';
import ItalyScreen from './Europe/ItalyScreen';
import PortugalScreen from './Europe/PortugalScreen';
import SpainScreen from './Europe/SpainScreen';
import UKScreen from './Europe/UKScreen';
import CanadaScreen from './North.America/CanadaScreen';
import CubaScreen from './North.America/CubaScreen';
import JamaicaScreen from './North.America/JamaicaScreen';
import MexicoScreen from './North.America/MexicoScreen';
import USAScreen from './North.America/USAScreen';
import AustraliaScreen from './Oceania/AustraliaScreen';
import FijiScreen from './Oceania/FijiScreen';
import NewZealandScreen from './Oceania/NewZealandScreen';
import ArgentinaScreen from './South.America/ArgentinaScreen';
import BrazilScreen from './South.America/BrazilScreen';
import ChileScreen from './South.America/ChileScreen';
import ColombiaScreen from './South.America/ColombiaScreen';
import PeruScreen from './South.America/PeruScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  AfricaScreen:AfricaScreen,
 
   AsiaScreen:AsiaScreen,
   EuropeScreen :EuropeScreen,
   OceaniaScreen:OceaniaScreen,
   SouthAmericaScreen:SouthAmericaScreen,
   NorthAmericaScreen:NorthAmericaScreen,
   EgyptScreen:EgyptScreen,
   KenyaScreen:KenyaScreen,
    NigeriaScreen:NigeriaScreen,
    UgandaScreen:UgandaScreen,
    SouthAfricaScreen:SouthAfricaScreen,
   AfghanistanScreen:AfghanistanScreen,
    IndiaScreen:IndiaScreen,
   ChinaScreen:ChinaScreen,
   PakistanScreen:PakistanScreen,
   RussiaScreen:RussiaScreen,
   SaudiScreen:SaudiScreen,
   SouthKoreaScreen:SouthKoreaScreen,
   SriLankaScreen:SriLankaScreen,
   FranceScreen:FranceScreen,
   GermanyScreen:GermanyScreen,
   ItalyScreen:ItalyScreen,
   PortugalScreen:PortugalScreen,
   SpainScreen:SpainScreen,
   UKScreen:UKScreen,
   CanadaScreen:CanadaScreen,
   CubaScreen:CubaScreen,
   JamaicaScreen:JamaicaScreen,
   MexicoScreen:MexicoScreen,
   USAScreen:USAScreen,
   AustraliaScreen:AustraliaScreen,
   FijiScreen:FijiScreen,
   NewZealandScreen:NewZealandScreen,
   ArgentinaScreen:ArgentinaScreen,
   BrazilScreen:BrazilScreen,
   ChileScreen:ChileScreen,
   ColombiaScreen:ColombiaScreen,
   PeruScreen:PeruScreen,
});


const AppContainer = createAppContainer(AppNavigator);






//done 








