import React, {useState, useEffect} from 'react'
import Login from './Login';
import NavBox from './NavBox';
import './css/Activities.css'
import { fetchAllActivities } from './api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

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


function Activities({token}) {
    const [activities, setActivities] = useState([])
    const classes = useStyles()

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchAllActivities()
            
          const actData = result
          //.forEach(r => console.log(r.name, r.description))
          
          setActivities(actData)
        };
     
        fetchData();
      }, [setActivities]);

 
    return (
        <div className="activities" style={{display: 'flex'}}>
            <NavBox/>
          <div style={{display:'flex', flexDirection:'column', marginTop:'100%', justifyContent:'center', marginRight:'25%', marginLeft:'25%'}}>
              { 
                  activities.map((a, i) =>  <div key = {i} style={{display:'flex', flexDirection:'column'}}>
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
            </div>)
              }

        </div>
            <NavBox/>
        </div>
    )
}

export default Activities
