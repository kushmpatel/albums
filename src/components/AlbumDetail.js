import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => (
    <Card>
        <CardSection>
        <View>
          <Image />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

        </CardSection>
    </Card>
  );

  const styles = {
     headerContentStyle:{
       flexDirection: 'column',
       justifyContent: 'space-around'
     }
  };

export default AlbumDetail;
