import React from 'react';
import ListDetail from '../components/ListDetail';
import Selector from '../components/Selector';

class ListContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentList: [],
      currentUrl: null,
      list: [{
        name: "Top Songs",
        url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
      },{
        name: "Top Podcasts",
        url: "https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/25/explicit.json"
      }]
    };
    this.handleSelected = this.handleSelected.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.updateList(1);
  }

  handleSelected(index) {
    this.updateList(index);
  }

  updateList(index) {
    let newList = [];
    if (index = 1) {
      fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((response) => response.json())
      .then((data) => {
        newList = data.feed.entry.map((item) => {
          return {name: item["im:name"].label, artist: item["im:artist"].label};
        });
      });
    }
    if (index = 2) {
      fetch("https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/25/explicit.json")
      .then((response) => response.json())
      .then((data) => {
        newList = data.feed.results.map((item) => {
          return {name: item.name, artist: item.artistName};
        });
      });
    }
    this.setState({currentList: newList});
  }

  render(){

    const listNodes = this.state.currentList.map((item, index) => {
      return (<ListDetail
        key={index}
        position={index}
        name={item.name}
        artist={item.artist}>
      </ListDetail>);
    })

    return (
      <div>
        <h2>List</h2>
        <Selector list={this.state.list} onSelected={this.handleSelected} />
        {listNodes}
      </div>
    );
  }
}

export default ListContainer;
