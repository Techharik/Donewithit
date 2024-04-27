import React from 'react'
import { View ,StyleSheet, Image} from 'react-native'

const ViewImageScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
            <View style={styles.logoButton}></View>
            <View style={styles.cancelButton}></View>
        </View>
        <View >
            <Image source={require('../assets/chair.jpg')}  resizeMode='contain' style={styles.imageContainer}></Image>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
       flex:1,
       backgroundColor:'black'
    },
    imageContainer:{
        width:"100%",
        height:"100%"
    },
    buttonContainer:{
     flex:1,
     flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:20,
     position:'relative',
     top:30
    },
    logoButton:{
        height:50,
        width:50,
        backgroundColor:"tomato"
    },
    cancelButton:{
        height:50,
        width:50,
        backgroundColor:"pink"
    }
})

export default ViewImageScreen