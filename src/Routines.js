import React, {useState, useEffect} from 'react';
import { fetchAllRoutines } from './api';
import './css/Routines.css'
import Login from './Login';
import NavBox from './NavBox';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

function Routines({setToken, token, username, setUsername}) {

    const classes = useStyles()

    const [routines, setRoutines] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchAllRoutines()
            
          const routData = result
          //.forEach(r => console.log(r.name, r.description))
          
          setRoutines(routData)
        };
     
        fetchData();
      }, [setRoutines]);

      
      // is it possible to not use nested mapping here for the routine.activities, 
      //but maybe render the activities component and attach it to routine?
    return (
        <div className="routines" style={{display: 'flex'}}>
            <NavBox setToken={setToken}/>
            <Login token={token} setToken={setToken} username={username} setUsername={setUsername}/>
            <div style={{marginTop:'5%'}}>
                {
                  routines.map((r, i) => <div 
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
              </div>
            
            <div>
            {token!=='' ? <AddCircleIcon style={{display:'flex', justifyContent:'center', marginTop:'20%'}}/> : 

                null}
            </div>
        </div>
    )
}

export default Routines
