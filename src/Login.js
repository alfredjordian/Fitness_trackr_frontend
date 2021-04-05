import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Grow from '@material-ui/core/Grow';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
// import WarningAlert from './alerts/WarningAlert' // render this when username and passwords are not validated
import { submitRegister, submitLogin } from './api';


const images = [
  {
    // url:
    //   "https://i.pinimg.com/originals/69/f9/e9/69f9e9afdabacb960185c5aaea3af619.gif",
    title: "Sign In",
    width: "100%",
  }
];
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    boxShadow: '5px 5px 24px 0px rgba(0,0,0,0.49)',
    borderRadius: '2%',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#B0C4B1',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#EDAFB8'
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection:'column',
    height:'100%',
    width:'5vw',
   
    
  },
  image: {
    position: "relative",
    height: '100vh',
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    color: "#5171A5"
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: '#AAFAC8'
  }
}));

function Login({setToken, token, username, setUsername}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [password, setPassword] = useState(""); 
 
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [regOpen, setRegOpen] = React.useState(false);

  const handleRegOpen = () => {
    setRegOpen(true);
  };

  const handleRegClose = () => {
    setRegOpen(false);
  };

  return (
    <div  className="login" style={{ display:'flex', position:'fixed'}}>
   <div className={classes.root} type="button" onClick={handleOpen} >
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="removeoutline" style={{outline: '0'}}>
      <Grow in={open}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FitnessCenterIcon />
        </Avatar>
        <form className={classes.form}
        onSubmit={async (e) => {
          e.preventDefault();
          
              
          const data = await submitLogin( username, password )
          
          const regToken = data.token
          

          setToken(regToken) 
          localStorage.setItem("token", token);
          handleClose()


          
      }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            type="username"

            onChange={(event) => setUsername(event.target.value)} value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

            onChange={(event) => setPassword(event.target.value)} value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >

            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <Fab
            variant="extended"
            size="medium"
            color="#337357"
            aria-label="add"
            className={classes.margin}
            type="button" onClick={handleRegOpen}
            >
          Register Here!
        </Fab>
            {/* <button type="button" onClick={handleRegOpen}>
              Don't have an account, Register here!
            </button> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
      </Grow>
      </div>
    </Modal>
        {/* ******************* REGISTER FORM ********************* */}
    <Modal
            className={classes.modal}
            open={regOpen}
            onClose={handleRegClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
             }}
    >
      <div className="removeoutline" style={{outline: '0'}}>
      <Grow in={regOpen}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FitnessCenterIcon />
        </Avatar>
        
        <form className={classes.form} 
        onSubmit={async (e) => {
          e.preventDefault();
          
              
          const data = await submitRegister( username, password )
          
          const regToken = data.token
          setToken(regToken)
          localStorage.setItem("token", token);
          handleRegClose()
          console.log(token)


          
      }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Create Username Here!"
            autoFocus

            onChange={(event) => setUsername(event.target.value)} value={username} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Create Password!"
            type="password"
            // id="password"
           

            onChange={(event) => setPassword(event.target.value)} value={password}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            
            fullWidth
            name="password"
            label="Confirm Password!"
            type="password"
            // id="password"

            onChange={(event) => setconfirmPassword(event.target.value) } value={confirmPassword}
            {...confirmPassword === password ? confirmPassword : null}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            style={{backgroundColor:'#AAFAC8'}}
          >

            Register
          </Button>
        </form>
      </div>
    </Container>
      </Grow>
      </div>
    </Modal>
  </div>
  );
}
export default Login;