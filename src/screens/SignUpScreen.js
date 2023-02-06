import { AsyncStorage, Alert, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React , {useState , useEffect } from 'react'
import BG from '../../assets/background2.jpg';
import {useNavigation} from '@react-navigation/native'
import SignUpInput from '../components/SignUpInput';
import CustomButton from '../components/CustomButton';
// import { saveData } from '../CRUD/create';
// import {getData} from '../CRUD/read';

// import { ref, set } from 'firebase/database';
// import { db } from '../firebase/config';
// import firebase from 'firebase';



function SignUpScreen() {
  
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        username,
        email,
        password,
      );
    } catch (error) {
      // Error saving data
    }
  };
  
  
  //  function writeUserData(username, email, password) {

    // set(ref(db,'users/'+ username), {
    //   username: username,
    //   email: email,
    //   password: password,
    // })

  //   const database = firebase.database();
  //   database.ref(db,'/users').set({
  //   username: username,
  //   email: email,
  //   password: password,
  //   }) .then(() =>{
  //     navigation.navigate('Confirm Email');
  //   }).catch((error) =>{
  //     Alert(error)
  //   })
  // };


  

  
const navigation = useNavigation();

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [confirmPass, setConfirmPass] = useState('');
// const [data, setData] = useState({ username, email, password, confirmPass});
const onHaveAccPressed = () => {  navigation.navigate('Home')  };
const onRegisterPressed = () => {  _storeData  ,navigation.navigate('Confirm Email') };
  return (

    
    <ImageBackground style={styles.background} source={BG}>
      <View>
        <Text style={styles.logoName}>Create an account</Text>
      </View>
      
      <SignUpInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
      <SignUpInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false}/>
      <SignUpInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <SignUpInput placeholder="Confirm Password" value={confirmPass} setValue={setConfirmPass} secureTextEntry={true}/>
      
      
      <CustomButton  text="Register" onPress={onRegisterPressed} type='PRIMARY'/>

      <View>
        <Text style={styles.termsPolicy}>By registering, you confirm that you accept our <Text style={styles.termColor}>Terms on Use</Text> and <Text style={styles.termColor}>Privacy Policies</Text>.</Text>
      </View>
      <CustomButton  text="Have an account? Please Sign in." onPress={onHaveAccPressed} type='TERTIARY'/>
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

export default SignUpScreen;