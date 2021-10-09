import React from 'react';
import { IconButton, Drawer, makeStyles, Box, useTheme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TabItem from '../NavigationItem/TabItem';

const useStyles = makeStyles((theme) => ({
    drawer: {
        backgroundColor: theme.palette.background,
        width: theme.spacing(30),
        overflowX: 'hidden'
    },

    closeIcon: {
        color: theme.palette.primary.dark,
    },
}));

const DrawerMenu = ({ isDrawerOpen, handleDrawerOpen, tabInfo, tabComponent }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Drawer
        variant="temporary"
        anchor={'right'}
        open={isDrawerOpen}
        onClose={handleDrawerOpen}
        ModalProps={{
            keepMounted: true,
        }}  
        classes={{ paper: classes.drawer }} 
        transitionDuration={450}
        >    
            <Box textAlign={'right'}> 
                <IconButton onClick={handleDrawerOpen}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton>                
            </Box>
            <Box textAlign={'center'} marginTop={theme.spacing(0.5)}>
                {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={tabComponent} key={tab.value} />)}
            </Box>
        </Drawer> 
    )
}

export default DrawerMenu;