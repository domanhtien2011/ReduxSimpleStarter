import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';

const API_KEY = "AIzaSyAPJjQ7g8VsvFVFH7deYa3qQGYsdewjq-E";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YTSeach({
      key: API_KEY,
      term: 'programming foundation'
    }, (videos) => {
      this.setState({videos});
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  };
};

ReactDOM.render(
  <App/>, document.querySelector(".container"));
