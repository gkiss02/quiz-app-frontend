import styles from './ResultCard.module.css'
import ResultComponent from './ResultComponent'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAuthToken } from '../../Util/auth'

function ResultCard () {
    const trophyIcon = require('../../Images/trophy.png')
    const coinIcon = require('../../Images/coin.png')
    const navigate = useNavigate()
    const [myRanking, setMyRanking] = useState(Object);

    function clickHandle () {
        navigate('/leaderboard')
    }

    useEffect(() => {
        (async function () {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/rankings/my-ranking`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })

            const data = await response.json();
            setMyRanking(data);
        }())
    }, [])

    return (
        <div className={styles.container} onClick={clickHandle}>
            <ResultComponent src={trophyIcon} title='Ranking' number={myRanking.rank}></ResultComponent>
            <div className={styles.line}></div>
            <ResultComponent src={coinIcon} title='Points' number={myRanking.score}></ResultComponent>
        </div>
    )
}

export default ResultCard