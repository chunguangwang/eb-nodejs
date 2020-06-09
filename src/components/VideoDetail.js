import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video, matches }) => {
        console.log("++++++++++");
        console.log(matches);
        if(!video) return(<div>Loading...</div>);
       
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?loop=1`
        return(
            <React.Fragment>
                <Paper elevation={8} style={matches?{ height:'50%' }:{ height: '35%' }}>
                    <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
                </Paper>
                <Paper elevation={4} style={{ padding: '15px' }}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        )
    
}

export default VideoDetail;