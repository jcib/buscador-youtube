import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBKiWFABk1W-ikcXcCZcEm1jPYxdU4n_s0';

// Create a new component. This component should produce 
// some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Quake III');

    }

    videoSearch(term) {

        YTSearch({key : API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            }); // en ES6 si se llaman igual podemos poner sólo videos
        });

    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500); //una llamada cada 300 ms

        return (
            <div>

                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={ this.state.videos } />

            </div>
        );
    }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));