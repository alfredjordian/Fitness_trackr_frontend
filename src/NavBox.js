import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root: {
      width: 50,
    },
  });


function NavBox({setToken}) {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return (
        <div>
            <BottomNavigation 
                value={value} 
                onChange={handleChange} 
                className={classes.root}
                style={{display: 'flex', width:"100vw", position:'fixed', top: '0', backgroundColor: '#5171A5', zIndex:'1000', boxShadow: '5px 5px 24px 0px rgba(0,0,0,0.49)' }}
                showLabels
                >
                
                <BottomNavigationAction label="Home"  style={{color: 'white'}} icon={<Link href="/home"> <HomeIcon style={{color: 'white'}}/></Link>} />
                

               
                <BottomNavigationAction label="Routines" style={{color: 'white'}}  icon={<Link href ="/routines"><FavoriteIcon style={{color: 'white'}}/></Link>} />
          

                
                <BottomNavigationAction label="My Routines" style={{color: 'white'}} icon={<Link href ="/myroutines"> <DirectionsBikeIcon style={{color: 'white'}}/> </Link>} />
                
                <BottomNavigationAction label="Activities"  style={{color: 'white'}} icon={<Link href="/activities"> <GolfCourseIcon style={{color: 'white'}} /> </Link>} />

                <BottomNavigationAction
                 label="Sign Out"
                 onChange={ ()=> setToken('')}  
                 style={{color: 'white'}} 
                 icon={ 
                 <ExitToAppIcon style={{color: 'white'}}/> 
                 } />
             
            </BottomNavigation>
            
                
            
            
        </div>
    )
}

export default NavBox
