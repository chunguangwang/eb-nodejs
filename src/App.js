import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar } from './components';

import youtube from './api/youtube';
import hello from './api/hello';

import './App.css';
// import Exercises from './components/Exercises';
import ExerIndex from './ExerIndex';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit(/*'pdf generation with react and node'*/'池田 綾子 - 足音');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCejjVdu6SSswpd_7wEPqLoel0_SLxIHj0',
                q: searchTerm,
            }
        });

        // const extraResponse = await hello.get();
        // console.log(extraResponse.data);

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    } 

    render(){
        const { selectedVideo, videos } = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}> 
                    <SearchBar onFormSubmit={this.handleSubmit} />
                </Grid>

                <ExerIndex selectedVideo={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
        )
    }
}

export default App;