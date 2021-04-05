import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function WarningAlert() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    
    setTimeout(function() {setOpen(false)}, 3000);
      
    return (
        <div>
            <div className={classes.root}>
        <Collapse in={open}>
            <Alert variant="filled" severity="warning" style={{color:'#4A5759'}}>
                This is a warning alert — check it out!
            </Alert>
      </Collapse>
    </div>
        </div>
    )
}

export default WarningAlert
