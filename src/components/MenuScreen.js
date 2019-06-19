import React, { useState } from 'react';

import backgroundImage from '../assets/ForestBG.jpg';
import { NavLink,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



export default function MenuScreen(props) {
  const [switchValue, setSwitchValue] = useState(false);

  const switchChange = () => {
    setSwitchValue(!switchValue);
  }
 
    return (
      
      <div className="menuScreenContainer" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button style={{display: 'block', height: '100%'}}>
             <p>Start</p>
         <NavLink to="/GameScreen"></NavLink>
        </Button>

        <Link to="/GameScreen">
          <Button style={{display: 'block', height: '100%'}}>GameScreen</Button>
        </Link>
          
        <Button style={{display: 'block' , height: '100%'}} 
                tag={Link} to="/LeaderBoardScreen">Leaderboard
        </Button>
         
        <NavLink to="LeaderBoardScreen">
          <Button style={{display: 'block', height: '100%'}}>
             <p>Leaderboard</p>
          </Button>
        </NavLink>
          
          <img src={backgroundImage} style={styles.bg} alt=''></img>
 
       </div>
        //<div>{switchValue ? 'Music On' : 'Music Off'}</div>
      
    );
}
  

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
};