import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSeach from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
require('dotenv').config();

class App extends Component {
  constructor(props) {
    super(props);
    console.log(process.env);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('programming debug');
  }

  videoSearch(term) {
    YTSeach({
      key: process.env.YOUTUBE_API_KEY,
      term: term
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
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
