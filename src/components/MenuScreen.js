import React, { useState } from 'react'; 



export default function MenuScreen(props) {
  const [switchValue, setSwitchValue] = useState(false);

  const switchChange = () => {
    setSwitchValue(!switchValue);
  }
 
    return (
      <div className="menuScreenContainer" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <img src='../assets/ForestBG.jpg' style={styles.bg} alt=''></img>
          <button
          title="Start"
          onPress={() => props.navigation.navigate('Game')}
        />
        <button onClick={switchChange} value={switchValue} />
        <div>{switchValue ? 'Music On' : 'Music Off'}</div>
        <button
          title="Leader Board"
          onPress={() => props.navigation.navigate('LeaderBoard')}
        />
      </div>
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