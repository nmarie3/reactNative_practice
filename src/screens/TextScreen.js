import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    return ( //textInput has no styling originally
        <View>
            <Text>Enter name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none" //need these because iOS auto does this when typing and its annoying
                autoCorrect={false}   //need these because iOS auto does this when typing and its annoying
                //value= 'hi there' //textInput can hold auto text with value
                value = {name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>

            <Text>Enter password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none" //need these because iOS auto does this when typing and its annoying
                autoCorrect={false}   //need these because iOS auto does this when typing and its annoying
                //value= 'hi there' //textInput can hold auto text with value
                value = {password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text>Password must be more than 4 characters</Text> : null}
        </View>
        //password.length checks if characters are a certain length then alerts you with a message if not as you enter text simulatiously
        //message disappears when you go over 4 characters, reappears when you're back down below that
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;