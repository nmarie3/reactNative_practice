import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//const ImageDetail = (props) => { >old code. if you want to use the props instead of destructuing, use the props.whatever below
const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View> 
            <Image 
            //source={props.imageSource}/>
            source={imageSource}/>
            <Text>{title}</Text> 
            <Text>
                Image Score - {score}
                </Text>
        </View> 
        //{props.title} {props.score}
        //the props takes the title from ImageScreen object, the above noncommented is the destructured version
        //require gives the path location
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;