import styles from './Result.module.css'
import { useNavigate } from 'react-router-dom';
import BlueButton from '../UI/BlueButton';
import { useContext, useEffect, useState } from 'react';
import { TimeCTX, QuestionsCTX, ScoreCTX } from '../Context/Context';
import { getAuthToken } from '../util/auth';

function Result () {
    const navigate = useNavigate();
    const timeCTX = useContext(TimeCTX);
    const questionsCTX = useContext(QuestionsCTX);
    const scoreCTX = useContext(ScoreCTX);
    const [latestGame, setLatestGame] = useState(Object);

    function backHandler () {
        navigate('/main');
        timeCTX.setTime(30);
    }

    useEffect(() => {
        async function getLatestGameScore () {
            const response = await fetch('http://localhost:8080/game/getLatestGameScore', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken(),
                }
            })
            const data = await response.json();
            setLatestGame(data);
        }
        getLatestGameScore();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <p>Congrats!</p>
                <p>You've got</p>
                <p className={styles.score}>{`${latestGame?.score}/${latestGame?.difficulty * 10}`}</p>
            </div>                
                <BlueButton onClick={backHandler}>Back</BlueButton>
        </div>
    )
}

export default Result;