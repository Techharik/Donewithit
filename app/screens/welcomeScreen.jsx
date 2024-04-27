
import { StyleSheet, ImageBackground, View, Image, SafeAreaView, StatusBar, Text, Platform, Dimensions, Button, Alert, TouchableWithoutFeedback } from 'react-native';

import {useDeviceOrientation} from '@react-native-community/hooks'
import Background from '../assets/background.jpg'

export default function WelcomeScreen() {
  const orientation = useDeviceOrientation()

  // console.log(orientation);
  return (

    <>
      <SafeAreaView style={[styles.container]}>
    <ImageBackground 
        source={Background} 
        resizeMode="cover" 
        style={styles.mainContainer} >
          <View style={styles.ImageContainer}>
          <Image source={require('../assets/logo-red.png')} style={{ height: 120, width: 100, resizeMode: 'contain' }} />
          <Text>Sell What You Don't Need</Text>
          </View>
    
        <View style={{ backgroundColor: 'tomato', flex: .5 }} />
        <View style={{ backgroundColor: 'lightgreen', flex: .5 }} />
      </ImageBackground>
     
        
       
      </SafeAreaView >

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  mainContainer: {
    flex:1
  },
  ImageContainer:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 40
  }
});
