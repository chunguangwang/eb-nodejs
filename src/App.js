import React from 'react';

import { Grid } from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList} from './components';
import './ExerIndex';

import youtube from './api/youtube';
import hello from './api/hello';

import './App.css';
// import Exercises from './components/Exercises';
// import ExerIndex from './ExerIndex';

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
                key: 'AIzaSyBLW0O1nGc6U_eL-0jSUiGCpxkCP43vb1Y',
                q: searchTerm,
            }
        });

        const extraResponse = await hello.get();
        console.log(extraResponse.data);

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
        // console.log(response.data.items);
    } 

    render(){
        const { selectedVideo, videos } = this.state;

        return(
            // <Grid justify="center" container spacing={10}>
            //     <Grid item xs={12}>
            <div>
                  {/* <Exercises />
                    <ExerIndex /> */}
                    <Grid container spacing={10} >
                        <Grid item xs={12}> 
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>

                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelected={this.onVideoSelect} />
                        </Grid>
                    </Grid>
             </div>
            //     </Grid>
            // </Grid>
        )
    }
}

export default App;