import React,{ useState, useEffect} from 'react';
import { fetchMyRoutines } from './api';
import './css/MyRoutines.css';
import Login from './Login';
import NavBox from './NavBox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// The database associates an account with the token created, when the token is deleted, the username/password still persists in the database
// deleting the token just deassociates the device from the database
// recent development -- data optimization, accessibility,  


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



function MyRoutines({setToken, token, password, setUsername }, username) {
    const classes = useStyles()

    const [myRoutines, setMyRoutines] = useState([])
    console.log(username, 'tester')


    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchMyRoutines(username)
            
          const routData = result
          //.forEach(r => console.log(r.name, r.description))
          
          setMyRoutines(routData)
          console.log(myRoutines)
        };
     
        fetchData();
      }, [setMyRoutines]);

    console.log(token)
    if(!Object.keys(username).length) return <div>Loading</div> 
    return (
        <div className="myroutines" >
            
            <NavBox setToken={setToken} token={token}/>
            {!token ? <Login token={token} setToken={setToken} username={username} setUsername={setUsername}/> : <h1 style={{display:'flex', justifyContent:'center',marginTop:'10%'}}>My Routines</h1>}

            {console.log(myRoutines)}
            
            {!myRoutines ? <h1>You have no routines, Create Some! </h1> : 
            <div style={{marginTop:'5%', marginRight:"50%"}}>
                {
                  myRoutines.map((r, i) => <div 
                        style={{
                            display:'flex', 
                            justifyContent:'center',
                             flexDirection:'column', 
                             marginLeft:'55%', 
                             marginRight:'0',
                             marginTop: '1%',
                             boxShadow: '5px 5px 24px 0px rgba(0,0,0,0.49)',
                             width:"100%"
                             }} >
                        <Card className={classes.root} variant="outlined"
                        style={{backgroundColor:"lightgrey"}}
                        >
                        <CardContent>

                        <Typography variant="h5" component="h2">
                        Routine : {`${r.name}, `}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Goal : {`${r.goal}, `}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Creator Name : {`${r.creatorName}, `}{r.creatorId}

                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">View Activities</Button>
                        </CardActions>

                        </Card> 
                        
                        <ColoredLine color="#5171A5" />


                  
                      {r?.activities.map((a)=>
                      <div>
                            <Card className={classes.root} variant="body"
                            style={{backgroundColor:'lightblue'}}
                            >
                            <CardContent >

                            <Typography variant="h5" component="h2">
                            Name:
                            {a?.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            Description:
                            {a?.description}
                            </Typography>
                            <Typography variant="body2" component="p">
                            Count:
                            {a?.count}
                            </Typography>
                            <Typography variant="body2" component="p">
                            Duration:
                            {a?.duration || 'No duration'}

                            </Typography>
                            </CardContent>

                            </Card>
                            <ColoredLine color="#A23E48" />
                      </div>
                      )}
                  
                  </div>              
                  )
              }
              </div>}
            
            {/* <AddCircleIcon style={{display:'flex', justifyContent:'center', marginTop:'20%'}}/> */}
        </div>
    )
}

export default MyRoutines
