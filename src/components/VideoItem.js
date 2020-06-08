import React from 'react';

import {Grid, Paper, Typography} from '@material-ui/core';

class VideoItem extends React.Component {
    onVideoSelect = (video) => { 
        const { onVideoSelected } = this.props;
        onVideoSelected(video); 
    }
    
    render(){
        const { video } = this.props;
        return(
            <Grid item xs={12}>
                <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => this.onVideoSelect(video)}>
                    <img style={{ marginRight: '20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                </Paper>
                <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => this.onVideoSelect(video)}>
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Paper>
            </Grid>
        );
    }
}

export default VideoItem;