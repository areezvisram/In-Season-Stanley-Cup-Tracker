import * as React from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import SubmitButton from '../SubmitButton'

const useStyles = makeStyles((theme) => ({
    textField: {
        backgroundColor: theme.palette.primary.light,        
        width: theme.spacing(100),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('900')]: {
            width: theme.spacing(80),
        },
        [theme.breakpoints.down('720')]: {
            width: theme.spacing(60),
        },

        [theme.breakpoints.down('600')]: {
            width: theme.spacing(50),
        }
    },

    font: {
        fontSize: theme.spacing(4), 
        marginTop: theme.spacing(2)       
    }
}));
const ContactForm =() => {
    const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
      <Grid container justifyContent="center">
        <form action="https://getform.io/f/caf0aaaa-c254-4f63-af28-c55a09a4f545" method="POST">
            <TextField
                name="body"
                label="Leave your feedback here"
                multiline
                rows={8}
                onChange={handleChange}                        
                className={classes.textField}
                InputProps={{ classes: { input: classes.font }}}
            />
            <Grid container justifyContent="center">
                <SubmitButton text="Submit" />                   
            </Grid>
        </form>
    </Grid>  
  );
}

export default ContactForm;