import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function SignUpInput({value, setValue, placeholder , secureTextEntry}) {
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
    width: '85%',

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    top: 150,

    paddingHorizontal: 7,
    marginVertical: 5,

  }

})

