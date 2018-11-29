import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumList extends Component {

  componentWillMount() {
    console.log('component will mount in albu lis');
  }

render() {
   return (
      <View>
        <Text>AlbumList !!!1 </Text>

     </View>
  );
}

}


export default AlbumList;
