import styles from './Result.module.css'
import { useNavigate } from 'react-router-dom';
import BlueButton from '../UI/BlueButton';
import { useContext, useEffect, useState } from 'react';
import { TimeCTX } from '../Context/Context';
import { getAuthToken } from '../Util/auth';

function Result () {
    const navigate = useNavigate();
    const timeCTX = useContext(TimeCTX);
    const [latestGame, setLatestGame] = useState(Object);

    function backHandler () {
        navigate("/");
        timeCTX.setTime(30);
    }

    useEffect(() => {
        (async function () {
            const response = await fetch('http://localhost:8080/game/getLatestGameScore', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken(),
                }
            })
            const data = await response.json();
            setLatestGame(data);
        })();
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