
import { StyleSheet, ImageBackground, View, Image, SafeAreaView, StatusBar, Text, Platform, useWindowDimensions, Dimensions } from 'react-native';
// import { useDeviceOrientation } from '@react-nativ/e-community/hooks';
// const windowDimensions = Dimensions.get('window');
// const screenDimensions = Dimensions.get('screen');

export default function WelcomeScreen() {
  console.log(Dimensions.get('screen'));
  return (

    <>
      <SafeAreaView style={[styles.container]}>
        <ImageBackground 
        source={{uri: 'https://picsum.photos/200/300'}} 
        resizeMode="cover" 
        style={styles.mainContainer} >
          <Image source={require('../assets/favicon.png')} style={{ height: 120, width: 100, resizeMode: 'contain' }} />
          <Text style={{color:'white'}}>Sell What You Don't Need</Text>
     </ImageBackground>

        <View style={{ backgroundColor: 'tomato', flex: .5 }} />
        <View style={{ backgroundColor: 'lightgreen', flex: .5 }} />

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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 40
  }
});
