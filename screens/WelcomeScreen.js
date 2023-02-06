import { Button, Image, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background2.jpg')}>
      <Image style={styles.logo} source={require('../assets/logo.png')}/>
      <View>
        <Text style={styles.logoName}>Secret{'\n'}Slambook</Text>
      </View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: "center",

    },
    logo: {
      height: 150,
      width: 200,
      position: 'absolute',
      top: 180,
      shadowColor: 'black',
      shadowOpacity: 10,

    },
    logoName:{
      fontSize: 36,
      fontFamily: 'Lemon',
      textAlign: 'center',
      top: 70,
      color: 'black',
      textShadowColor: '#cd1cff',
      textShadowRadius: 20,
      textShadowOffset: {width: 5, height: 5},
    },
    

})

export default WelcomeScreen;