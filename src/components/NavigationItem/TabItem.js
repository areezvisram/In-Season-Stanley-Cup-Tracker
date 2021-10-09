import React from 'react';
import { Tab, makeStyles, useMediaQuery , useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tab: {
        color: theme.palette.secondary.light,        
        fontSize: theme.spacing(3),        
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.2)'
        }, 
        padding: theme.spacing(4),
    },
    smallTab: {
        color: theme.palette.primary.dark,        
        fontSize: theme.spacing(3),        
        transition: 'transform .2s',
        transitionTimingFunction: 'ease-out',
        "&:hover": {
            transform: 'scale(1.2)'
        }, 
        padding: theme.spacing(4)    
    }
}));


const TabItem = ({ label, route, component }) => {    
    const classes = useStyles();    
    const theme = useTheme();    
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('xs', '1070'));
    return (          
        <Tab key={label} label={label} className={isSmallDisplay ? classes.smallTab : classes.tab} component={component} to={route}/>        
    )
};

export default TabItem;