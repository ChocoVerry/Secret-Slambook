import {Image, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../components/CustomInput'
import Logo from '../../assets/logo.png'
import BG from '../../assets/background2.jpg'
import CustomButton from '../components/CustomButton'
import {useNavigation} from '@react-navigation/native'

function WelcomeScreen() {

  
  const navigation = useNavigation ();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => { if (username === 'Choco' && password === '1234') {
    navigation.navigate('Activity');
  } else {
    alert('Invalid Username and Password')
  }
  };
  const onForgotPassPressed = () => {  navigation.navigate('Forgot Password')}; 
  const onSignUpPressed= () => {  navigation.navigate('Sign Up')  };   
 
  
    
   


  return (
    <ImageBackground style={styles.background} source={BG}>
      <Image style={styles.logo} source={Logo}/>
      <View>
        <Text style={styles.logoName}>Secret{'\n'}Slambook</Text>
      </View>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Sign In" onPress={onSignInPressed} type='PRIMARY'/>
      <CustomButton text="Forgot Password" onPress={onForgotPassPressed} type='TERTIARY'/>
      <CustomButton text="Don't have an account? Sign Up Now!" onPress={onSignUpPressed} type='TERTIARY'/>
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

export default WelcomeScreen;