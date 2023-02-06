import {Image, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState} from 'react'
import Logo from '../../assets/logo.png'
import BG from '../../assets/background3.jpg'
import CustomButton from '../components/CustomButton'
import {useNavigation} from '@react-navigation/native'


function ShowSecretsScreen() {

  const navigation = useNavigation ();
  
  return (
    <ImageBackground style={styles.background} source={BG}>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: "center",

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

export default ShowSecretsScreen;