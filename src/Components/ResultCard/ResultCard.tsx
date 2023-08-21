import styles from './ResultCard.module.css'
import ResultComponent from './ResultComponent'

function ResultCard () {
    const tropyIcon = require('../../Images/trophy.png')
    const coinIcon = require('../../Images/coin.png')
    return (
        <div className={styles.container}>
            <ResultComponent src={tropyIcon} title="Ranking" number={348}></ResultComponent>
            <div className={styles.line}></div>
            <ResultComponent src={coinIcon} title="Points" number={1209}></ResultComponent>
        </div>
    )
}

export default ResultCard