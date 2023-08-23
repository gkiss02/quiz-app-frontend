import styles from './Answer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useContext } from 'react';
import { ScoreCTX } from '../../Context/Context';

type AnswerProps = {
    answer: string,
    setSelected: (element: string) => void,
    selected: string,
    isCorrectAnswer: boolean,
    isWrongAnswer: boolean,
    isChecked: boolean,
    correctAnswer: string
}

const Answer: React.FC <AnswerProps> = (props) => {
    const scoreCTX = useContext(ScoreCTX);

    useEffect(() => {
        if (props.correctAnswer == props.selected) {
            scoreCTX.setScore(scoreCTX.score + 1);
        }
    }, [props.isCorrectAnswer])

    function clickHandle (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        props.setSelected(event.currentTarget.id);
    }

    return (
        <div 
            id={props.answer} 
            className= {`
                ${styles.container}
                ${!props.isChecked && styles.hover} 
                ${props.selected == props.answer && styles.selected} 
                ${props.isCorrectAnswer && styles['correct-answer']}
                ${props.isWrongAnswer && props.selected == props.answer && styles['wrong-answer']}
            `} 
            onClick={!props.isChecked ? clickHandle : () => {}}
        >
            <p>{props.answer}</p>
            <div 
                className={`
                    ${styles.circle} 
                    ${props.isCorrectAnswer && styles['correct-circle']} 
                    ${props.isWrongAnswer && props.selected == props.answer && styles['wrong-circle']}
                    `}
                >
                {props.isCorrectAnswer && <FontAwesomeIcon className={styles.icon} icon={faCheck}/>}
                {props.isWrongAnswer && props.selected == props.answer && <FontAwesomeIcon className={styles.icon} icon={faX}/>}
            </div>
        </div>
    )
}

export default Answer