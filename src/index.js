import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAPJjQ7g8VsvFVFH7deYa3qQGYsdewjq-E";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSeach({
      key: API_KEY,
      term: 'popping dance'
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}/>
      </div>
    )
  };
};

ReactDOM.render(
  <App/>, document.querySelector(".container"));
