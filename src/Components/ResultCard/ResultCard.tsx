import styles from './ResultCard.module.css'
import ResultComponent from './ResultComponent'
import { useNavigate } from 'react-router-dom'

function ResultCard () {
    const tropyIcon = require('../../Images/trophy.png')
    const coinIcon = require('../../Images/coin.png')
    const navigate = useNavigate()

    function clickHandle () {
        navigate('/leaderboard')
    }

    return (
        <div className={styles.container} onClick={clickHandle}>
            <ResultComponent src={tropyIcon} title="Ranking" number={348}></ResultComponent>
            <div className={styles.line}></div>
            <ResultComponent src={coinIcon} title="Points" number={1209}></ResultComponent>
        </div>
    )
}

export default ResultCard