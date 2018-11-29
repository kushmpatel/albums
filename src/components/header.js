// Import Libraries
import React from 'react';
import { Text, View } from 'react-native';
//Create component
const Header = (props) => {
const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'


  },
  textStyle: {
    fontSize: 20
  }
};
//Make the component available to other part of the app
export default Header;
