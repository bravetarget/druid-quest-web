import React from 'react';
import Character from '../../models/Character';


import CombatView from './CombatView';

export default function GameScreen(props) {
    return (
        <div style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <div>Game Screen</div>
          
          <button
            title="Menu"
            onPress={() => props.navigation.navigate('Menu')}
          />
          <CombatView character={Character} />
        </div>
    )
}