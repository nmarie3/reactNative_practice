import React, {useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => { //call reducer outside of squarescreen function to prevent getting this state confused with the state in that function
    //state === {red: number, green: number, blue: number};
    //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    //ref notes, state is arg 1 and action is arg 2
    
    switch (action.type) {
        case 'change_red': 
            //**old code before tunuary
            // **if (state.red + action.payload > 255 || state.red + action.payload < 0) {
            //     **return state; //must return state here. if you have only return will get undefined error because we need to alway return a state
            // **}
           return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : {...state, red: state.red + action.payload};
            //never do (never modify state values directly)
            //state.red = state.red - 15;
            //**return {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state
            : {...state, green: state.green + action.payload};
            // **if (state.green + action.payload > 255 || state.green + action.payload < 0) {
            //     **return state;
            // **}
            // **return {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : {...state, blue: state.blue + action.payload};
            // **if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
            //     **return state;
            // **}
            // **return {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
   const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0});
   //dispatch runs the reducer
   const {red, green, blue} = state; //destructuring so we can use below for bgColor


    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                color="Red"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                color="Blue"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
                color="Green"/>
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;