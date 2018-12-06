import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );

export default AlbumDetail;
