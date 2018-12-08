import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {

  state = { albums: [] } ;

  componentWillMount() {
    console.log('component will mount in album list');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
     // fetch ('https://rallycoding.herokuapp.com/api/music_albums')
     // .then(response => console.log(response));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
    //<Text key={album.title}>{album.title}</Text>);
    <AlbumDetail key={album.title} album={album} />);
  }

render() {
   return (
      <ScrollView>
        {this.renderAlbums()}

     </ScrollView>
  );
}

}


export default AlbumList;
