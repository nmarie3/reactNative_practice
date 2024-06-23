import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
//FlatList element turns an array into a list of elements
//required to pass in a 'prop' of data - the array of data that we are going to create a bunch of elements oyt of
//also required to pass in a renderItem prop function that will turn each individual item into an element
//very similar to 'mapping' from web React but this is better for native

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 28}, //key must be a string not a number if you insert keys in item manually ex;  key: '1'. otherwise do below keyExtractor
        {name: 'Friend #2', age: 30},
        {name: 'Friend #3', age: 65},
        {name: 'Friend #4', age: 22},
        {name: 'Friend #5', age: 32},
        {name: 'Friend #6', age: 41},
        {name: 'Friend #7', age: 30},
    ];
    return (
        <FlatList 
            horizontal //tells list we want it to scroll horizontally instead of vertical, don't need to specify anything for vertical scrolling
            showsHorizontalScrollIndicator={false} //hides the scroll bar at bottom of screen
            keyExtractor={(friend) => friend.name } //name property becomes key
            data={friends} //need data and renderItem props
            renderItem={({item}) => {  //renderItem is function called with every element of array
                //item === {name: 'Friend #1'}
                return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50 //creates spacing between each Text property
    }
});

export default ListScreen;