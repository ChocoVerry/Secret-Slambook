import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
// test

export default function CustomButton({ onPress, text,  type= 'PRIMARY'}) {

  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    
    width: '50%',
    height: 50,
    top: 300,
    alignContent: "center",
    paddingHorizontal: 7,
    marginVertical: 5,
    borderRadius: 5,

 
  },
    container_PRIMARY: {
        backgroundColor: '#e381f5',
    },

    container_SECONDARY: {
        borderColor:"#e381f5",
        borderWidth: 2,
    },

  container_TERTIARY: {
      
  },

  container_QUARTINARY: {
    borderColor:"#a53d9c",
    borderWidth: 2
  },
  
    text: {
        textAlign: "center",
        top: 15,
        color: "white",
        fontWeight: "bold",
        
    
    },
    
    text_SECONDARY: {
      color: '#e381f5',
  },

    text_TERTIARY: {
      color: 'gray',
    },

    text_QUARTINARY:{
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',

    }


    

  
  

 





})