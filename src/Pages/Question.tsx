import FilledBar from "../Components/FilledBar/FilledBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './Question.module.css';
import buttonStyles from '../Styles/Button.module.css'
import Timer from "../Components/Timer/Timer";
import Answer from "../Components/Answer/Answer";
import { useState, useContext, useEffect } from "react";
import { QuestionsCTX, TimeCTX } from "../Context/Context";
import TimeOutModal from "../Components/TimeOutModal/TimeOutModal";

function Question () {
    const questionsCTX = useContext(QuestionsCTX);
    const [questionCounter, setQuestionCounter] = useState(0);
    const actualQuestion = questionsCTX.questions[questionCounter];
    const [isChecked, setIsChecked] = useState(false);
    const [selected, isSelected] = useState('');
    const timeCTX = useContext(TimeCTX);
    const [counter, setCounter] = useState(timeCTX.time);
    const [visible, setVisible] = useState(false);

    function checkHandle () {
        setIsChecked(true);
    }

    function nextHandle () {
        setCounter(timeCTX.time);
        setQuestionCounter(questionCounter + 1);
        setIsChecked(false);
        setVisible(false);
    }

    function setSelected (element: string) {
        isSelected(element);
    }

    const answers: string[] = [];
    answers.push(actualQuestion.correct_answer, ...actualQuestion.incorrect_answers);

    useEffect(() => {
        if (!isChecked && counter > 0) {
            const timeout = setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
        if (counter == 0 && !isChecked) {
            setIsChecked(true);
            setVisible(true)
        }
    }, [counter, isChecked]);

    return (
        <div className={styles.container}>
            <div className={styles['bar-container']}>
                <FontAwesomeIcon icon={faX} className={styles['x-icon']}/>
                <FilledBar numberOfQuestions={questionsCTX.questions.length} actual={questionCounter + 1}></FilledBar>
            </div>
            <div className={styles['timer-container']}>
                <Timer time={counter}></Timer>
            </div>
            <div className={styles['question-container']}>
                <h2 className={styles.text}>{actualQuestion.question}</h2>
            </div>
            {answers.map((answer, index) => 
                <Answer
                    key={index} 
                    answer={answer} 
                    setSelected={setSelected} 
                    selected={selected}
                    correctAnswer={actualQuestion.correct_answer == answer && isChecked}
                    wrongAnswer={actualQuestion.correct_answer != answer && isChecked}
                    isChecked={isChecked}
                />
            )}
            <button className={`${buttonStyles.button} ${buttonStyles['blue-button']}`} onClick={isChecked ? nextHandle : checkHandle}>
                {isChecked ? 'Next' : 'Check'}
            </button>
            {visible && <TimeOutModal nextHandle={nextHandle}></TimeOutModal>}
        </div>
    )
}

export default Question