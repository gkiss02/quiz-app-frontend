import styles from './ResultCard.module.css'
import ResultComponent from './ResultComponent'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAuthToken } from '../../util/auth'

function ResultCard () {
    const trophyIcon = require('../../Images/trophy.png')
    const coinIcon = require('../../Images/coin.png')
    const navigate = useNavigate()
    const [myRanking, setMyRanking] = useState(Object);

    function clickHandle () {
        navigate('/leaderboard')
    }

    useEffect(() => {
        async function fetchMyRanking () {
            const response = await fetch('http://localhost:8080/ranking/myRanking', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })

            const data = await response.json();
            setMyRanking(data);
        } 
        fetchMyRanking();
    }, [])

    return (
        <div className={styles.container} onClick={clickHandle}>
            <ResultComponent src={trophyIcon} title="Ranking" number={myRanking.stead}></ResultComponent>
            <div className={styles.line}></div>
            <ResultComponent src={coinIcon} title="Points" number={myRanking.totalScore}></ResultComponent>
        </div>
    )
}

export default ResultCard