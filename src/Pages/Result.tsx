import styles from './Result.module.css'
import { useNavigate } from 'react-router-dom';
import BlueButton from '../UI/BlueButton';
import { useContext } from 'react';
import { TimeCTX, QuestionsCTX, ScoreCTX } from '../Context/Context';

function Result () {
    const navigate = useNavigate();
    const timeCTX = useContext(TimeCTX);
    const questionsCTX = useContext(QuestionsCTX);
    const scoreCTX = useContext(ScoreCTX);

    function backHandler () {
        navigate('/main');
        timeCTX.setTime(30);
        scoreCTX.setScore(0);
    }

    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <p>Congrats!</p>
                <p>You've got</p>
                <p className={styles.score}>{`${scoreCTX.score}/${questionsCTX.questions.length}`}</p>
                <BlueButton onClick={backHandler}>Back</BlueButton>
            </div>
        </div>
    )
}

export default Result;