import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render(){
        const listOfVideos = this.props.videos.map(
            (video, id) =>
             <VideoItem onVideoSelected={this.props.onVideoSelected} key={id} video={video}/>);
        return(
            <Grid container spacing={10}>
               {listOfVideos}
            </Grid>
        )
    }
}

export default VideoList;