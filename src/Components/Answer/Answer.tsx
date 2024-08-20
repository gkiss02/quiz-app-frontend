import styles from './Answer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { getAuthToken } from '../../Util/auth';
import Toaster from '../../UI/Toaster';
import { useNavigate } from 'react-router-dom';
import { ErrorCTX } from '../../Context/Context';

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
    const navigate = useNavigate();
    const errorToasterState = useContext(ErrorCTX);

    async function increaseScore () {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/game/increase-score`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken(),
                }
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

        } catch (error) {
            errorToasterState.setError(true);
            navigate('/');
        }
    }

    useEffect(() => {
        if (props.correctAnswer == props.selected) {
            increaseScore();
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