import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start', //this condenses the auto stretch of a box to get as close as possible to the left side while leaving some padding
        height: 200,
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4, //40% of space, only do this if you want exacts. otherwise just use 1 for the area you want biggest
        //alignSelf overrides whatever is in place for alignItems so you can have one item be different from the rest of the main style
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4, //40% of space
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2, //20% of space
    },
});

export default BoxScreen;