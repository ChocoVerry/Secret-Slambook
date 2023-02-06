import { ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState} from 'react'
import BG from '../../assets/background2.jpg';
import SignUpInput from '../components/SignUpInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native'


function ForgotPasswordScreen() {
  
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const onConfirmPressed = () => {  navigation.navigate('New Password');  };
  const onBackSignInPressed = () => {  navigation.navigate('Home');  };
  return (
    <ImageBackground style={styles.background} source={BG}>
      <View>
        <Text style={styles.logoName}>Reset your Password</Text>
      </View>
      
      <SignUpInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
      
      <CustomButton  text="Confirm" onPress={onConfirmPressed} type='PRIMARY'/>
      <CustomButton  text="Back to Sign In" onPress={onBackSignInPressed} type='TERTIARY'/>
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
      textAlign: 'center',
      top: 70,
      color: 'black',
      
    },
    termsPolicy:{
      padding: 20,
      color: 'black',
      fontWeight: 400,
      top: 300,
    },
    termColor:{
      color: 'red',
      fontWeight: 'bold',
    }
    

})

export default ForgotPasswordScreen;