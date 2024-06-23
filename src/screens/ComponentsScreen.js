import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
//text us a primitive react element to show basic content on screen
//view is a general purpose element used for grouping other elements or styling
//image shows image
//button shows a button a user can press, gives some feedback whenever user presses

const ComponentsScreen = () => {
    const name = 'Natasha';

    return (
        <View>
        <Text style={styles.textStyle}>Getting started with reactive native</Text>
        <Text style={styles.subheaderStyle}>My name is {name}</Text>
        </View>
)};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:  45
    },
    subheaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;