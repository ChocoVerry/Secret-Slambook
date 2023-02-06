import { ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState} from 'react'
import BG from '../../assets/background2.jpg'
import {useNavigation} from '@react-navigation/native'
import SignUpInput from '../components/SignUpInput'
import CustomButton from '../components/CustomButton'
import { Alert } from 'react-native'

function NewPasswordScreen() {

  const navigation = useNavigation();

  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const onConfirmPressed = () => {  
    Alert.alert('Sucessful Password Change', 'Back to Sign In', [
        {text: 'OK', onPress: () => {navigation.navigate('Home')} },
    ]);

    };
  const onBackSignInPressed = () => {  navigation.navigate('Home')  };
  return (
    <ImageBackground style={styles.background} source={BG}>
      <View>
        <Text style={styles.logoName}>Reset your Password</Text>
      </View>
      
      <SignUpInput placeholder="New Password" value={newPass} setValue={setNewPass} secureTextEntry={true}/>
      <SignUpInput placeholder="Confirm New Password" value={confirmNewPass} setValue={setConfirmNewPass} secureTextEntry={true}/>

      <CustomButton  text="Confirm" onPress={onConfirmPressed} type='PRIMARY'/>
      <CustomButton  text="Cancel" onPress={onBackSignInPressed} type='TERTIARY'/>
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

export default NewPasswordScreen;