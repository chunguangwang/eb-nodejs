import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { VideoDetail, VideoList } from '../components'
const useStyles = makeStyles(theme => ({
    Paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
    },
}));


const FullWidthGrid = ({ selectedVideo, videos, onVideoSelect }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1200px)');
    
    return (
    <Grid container item={true} sm={12} spacing={10}>
        {/* {`(min-width:600px) matches: ${matches}`} */}
        <Grid item sm={matches?8:12}>
            <VideoDetail video={selectedVideo} />
        </Grid>
        <Grid item sm={matches?4:12}>
             <VideoList videos={videos} onVideoSelected={onVideoSelect} />
        </Grid>
    </Grid>
    );
}

export default FullWidthGrid;