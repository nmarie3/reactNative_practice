import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => { //making sure values dont go over 255 or below 0
        //color === 'red', 'green', 'blue' as strings
        //change === +15 or -15

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                //null means don't do anything
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return; 
            default:
                return;
        }


        //old code before turning into a switch statement
        // if (color === 'red') {
        //     if (red + change > 255 || red + change < 0) {
        //         return;
        //     }else {
        //         setRed(red + change);
        //     }
        // }

    };

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                //old code before setColor function was made
                //onIncrease={() => setRed(red + COLOR_INCREMENT)} 
                //onDecrease={() => setRed(red - COLOR_INCREMENT)} 
                color="Red"/>
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                //old code before setColor function was made
                //onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
                //onDecrease={() => setBlue(blue - COLOR_INCREMENT)} 
                color="Blue"/>
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                //old code before setColor function was made
                //onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
                //onDecrease={() => setGreen(green - COLOR_INCREMENT)} 
                color="Green"/>
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;