import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar'

var API_KEY = "AIzaSyAPJjQ7g8VsvFVFH7deYa3qQGYsdewjq-E";

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
    
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
