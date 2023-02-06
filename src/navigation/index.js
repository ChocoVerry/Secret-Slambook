import { StyleSheet, Text,  } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ShowSecretsScreen from '../screens/ShowSecretsScreen';
import NewSecretScreen from '../screens/NewSecretScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
            <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
            <Stack.Screen name="New Password" component={NewPasswordScreen}/>
            <Stack.Screen name="Activity" component={ActivityScreen}/>
            <Stack.Screen name="Show Secrets" component={ShowSecretsScreen}/>
            <Stack.Screen name="New Secrets" component={NewSecretScreen}/>
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})