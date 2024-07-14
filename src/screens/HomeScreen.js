import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//Button - very simple component for showing a button and detecting a press
//TouchableOpacity - highly customizable component that can detect a press on just about any kind of element

//const HomeScreen = (props) => { <old code if you want to go the props route.
//if you go props instead of pulling directly from navigation, also fix the onPress functions below
  const HomeScreen = ({navigation}) => { //remember navigation is being pulled from object props hence the {}
  return (
  <View> 
    <Text style={styles.text}>LycoReco Rocks!</Text>
    <Button 
      //onPress={() => props.navigation.navigate('Components')}
      onPress={() => navigation.navigate('Components')}
      title="Go to component demo"
    /> 
    <Button 
      //onPress={() => props.navigation.navigate('List')}
      onPress={() => navigation.navigate('List')}
      title="Go to list demo"
    /> 
    <Button 
      onPress={() => navigation.navigate('Image')}
      title="Go to image demo"
    /> 
    <Button 
      onPress={() => navigation.navigate('Counter')}
      title="Go to counter demo"
    /> 
    <Button 
      onPress={() => navigation.navigate('Color')}
      title="Go to color demo"
    /> 
    <Button 
      onPress={() => navigation.navigate('Square')}
      title="Go to square demo"
    /> 
    <Button 
      onPress={() => navigation.navigate('Text')}
      title="Go to text demo"
    />
    <Button 
      onPress={() => navigation.navigate('Box')}
      title="Go to box demo"
    />
    <TouchableOpacity //onPress={() => props.navigation.navigate('List')}
    onPress={() => navigation.navigate('List')}>
      <Text>Go to list demo</Text>
    </TouchableOpacity> 
  </View> //dont pass text through a button element like you would how html does. pass a title instead
  //for touchable opacity, it always gives a fade effect as feedback for users. can also put any kind of element inside this unlike the button element
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
