import React from 'react';
import SongDetail from '../components/SongDetail';

class SongsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      list: null
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then((response) => response.json())
    .then((data) => this.setState({songs: data.feed.entry}));
  }

  handleSelected(index) {
    const selectedList = this.state.list[index];
    this.setState({list: selectedList});
  }

  render(){

    const songNodes = this.state.songs.map((song, index) => {
      return (<SongDetail
        key={song.id.attributes["im:id"]}
        position={index}
        name={song["im:name"].label}
        artist={song["im:artist"].label}>
        </SongDetail>);
    })

    return (
      <div>
        <h2>List</h2>
        {/* <Selector list={this.state.songs} onSelected={this.handleSelected} /> */}
        {songNodes}
      </div>
    );
  }
}

export default SongsContainer;
