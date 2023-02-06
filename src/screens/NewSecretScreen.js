
import React , {useState} from 'react'
import Logo from '../../assets/logo.png'
import BG from '../../assets/background3.jpg'
import CustomButton from '../components/CustomButton'
import {useNavigation} from '@react-navigation/native'

import {ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const NewSecretScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    setItems([...items, { title, body }]);
    navigation.navigate('Items');
  };

  return (
    <ImageBackground style={styles.background} source={BG}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const ItemsScreen = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    itemContainer: {
      padding: 20,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      width: '90%',
    },
    itemTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
      },
      itemBody: {
      fontSize: 16,
      },
      background:{
        flex: 1,
        alignItems: "center",

    },
      });
      
export default NewSecretScreen;
export { ItemsScreen };
      