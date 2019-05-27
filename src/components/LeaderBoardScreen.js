import React from 'react';


export default function LeaderBoardScreen(props) {
    

    return (
        <div style={{ flex: 1 , alignItems: 'center' , justifyContent: 'center' }}>
            <div>Leader Board</div>
            <button
            title="Menu"
            onPress={() => props.navigation.navigate('Menu')}
            />
        </div>
    );
}