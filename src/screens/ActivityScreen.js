import {Alert ,Image, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState} from 'react'
import Logo from '../../assets/logo.png'
import BG from '../../assets/background3.jpg'
import CustomButton from '../components/CustomButton'
import {useNavigation} from '@react-navigation/native'


function ActivityScreen() {

  const navigation = useNavigation ();
  const onNewSecretsPressed = () => {  navigation.navigate('New Secrets')  };
  const onShowSecretsPressed = () => {  navigation.navigate('Show Secrets')}; 
  const onLogOutPressed= () => {  navigation.navigate('Home')  };   

  return (
    <ImageBackground style={styles.background} source={BG}>
      <Image style={styles.logo} source={Logo}/>
      <View>
        <Text style={styles.logoName}>Secret{'\n'}Slambook</Text>
      </View>
      <CustomButton text="New Secrets" onPress={onNewSecretsPressed} type='QUARTINARY'/>
      <CustomButton text="Show Secrets" onPress={onShowSecretsPressed} type='QUARTINARY'/>
      <CustomButton text="Log out" onPress={onLogOutPressed} type='QUARTINARY'/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: "center",

    },
    logInButton: {
        alignItems:"center",
        top: 350,
        position: 'absolute',

    },
    logo: {
      height: 150,
      width: 200,
      position: 'absolute',
      top: 180,
      shadowColor: 'black',
      

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

export default ActivityScreen;