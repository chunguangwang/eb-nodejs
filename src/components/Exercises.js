import React from 'react';
import { AppBar, Toolbar, Typography, Divider } from '@material-ui/core';

export default props =>
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                    Hello from Exercies
                </Typography>
            </Toolbar>
        </AppBar>
        <Divider />
        {/* <Paper>
            <Tabs value={0}
                  indicatorColor="primary"
                  textColor="primary"
                  centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper> */}
    </div>