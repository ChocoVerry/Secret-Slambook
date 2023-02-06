import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomInput({value, setValue, placeholder , secureTextEntry}) {
  return (
    <View style={styles.container}>
      <TextInput
       value={value} 
       onChangeText={setValue} 
       placeholder={placeholder}
       secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'trasparent',
    width: '50%',

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    top: 300,

    paddingHorizontal: 7,
    marginVertical: 5,

  }

})

