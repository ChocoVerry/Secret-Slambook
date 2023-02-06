import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native'
import React , {useState} from 'react'
import BG from '../../assets/background2.jpg';
import {useNavigation} from '@react-navigation/native'

import SignUpInput from '../components/SignUpInput';
import CustomButton from '../components/CustomButton';
function ConfirmEmailScreen() {
  
  const navigation = useNavigation();
  
  const [code, setCode] = useState('');
  const onResendCodePressed = () => {  console.warn('Code: 1234');  };
  const onConfirmPressed = () => { 

    Alert.alert('Successfull', 'Confirmed Code Going Back to Sign In', [
      {text: 'OK', onPress: () => {navigation.navigate('Home')} },
  ]);


   };
  const onBackSignInPressed = () => { navigation.navigate('Home')  };
  return (
    <ImageBackground style={styles.background} source={BG}>
      <View>
        <Text style={styles.logoName}>Confirm Email Address</Text>
      </View>
      
      <SignUpInput placeholder="Code" value={code} setValue={setCode} secureTextEntry={false}/>
      
      <CustomButton  text="Confirm" onPress={onConfirmPressed} type='PRIMARY'/>
      <CustomButton  text="Resend Code" onPress={onResendCodePressed} type='SECONDARY'/>
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

export default ConfirmEmailScreen;