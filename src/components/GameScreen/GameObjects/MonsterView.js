import React from 'react';

import Character from '../../../models/Character';

export default function Monster(props) {
	function onMonsterTap (props) {
		if(props.monster) return;

		const { monster } = props;

		monster.takeDamage(Character.level * 2);
	}

	return(
		<div onClick={onMonsterTap}>
			<img
				alt=''
				src={'../../../../assets/bunny.gif'}
			/>
			{props.monster.isCorrupt && 
				<img
					alt=''
					src={'../../../../assets/corrupted.gif'}
				/>
			}
		</div>

	);
}
