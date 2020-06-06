import React from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { VideoDetail, VideoList } from '../components'


const FullWidthGrid = ({ selectedVideo, videos, onVideoSelect }) => {
    const matches = useMediaQuery('(min-width:1200px)');
    
    return (
    <Grid container item={true} sm={12} spacing={10}>
        <Grid item sm={matches?8:12}>
            <VideoDetail video={selectedVideo} matches={matches}/>
        </Grid>
        <Grid item sm={matches?4:12}>
             <VideoList videos={videos} onVideoSelected={onVideoSelect} />
        </Grid>
    </Grid>
    );
}

export default FullWidthGrid;