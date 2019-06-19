
export default function Monster(props) {
  function constructor(stats, name = 'Corrupt Animal'){
        props.stats = stats;
        props.name = name;
       props.isCorrupt = true;
  }

    function takeDamage(dmg){
        let { hitpoints } = props.stats;
        hitpoints -= dmg;

        if (hitpoints <= 0) {
            props.isCorrupt = false;
        }
    }
        return hitpoints;
}
