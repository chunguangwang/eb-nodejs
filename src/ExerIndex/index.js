import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles(theme => ({
    Paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
    },
}));


export default function FullWidthGrid() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1200px)');
    return (
    <Grid container item={true} sm={12}>
        {/* {`(min-width:600px) matches: ${matches}`} */}
        <Grid item sm={matches?6:12}>
            <Paper className={classes.Paper}>
            {matches?'Left':'Top'} Pane
            </Paper>
        </Grid>
        <Grid item sm={matches?6:12}>
            <Paper className={classes.Paper}>
            {matches?'Right':'Bottom'} Pane
            </Paper>
        </Grid>
    </Grid>
    );
}