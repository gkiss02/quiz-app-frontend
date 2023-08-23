import FilledBar from "../Components/FilledBar/FilledBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './Question.module.css';
import Timer from "../Components/Timer/Timer";
import Answer from "../Components/Answer/Answer";
import { useState, useContext, useEffect } from "react";
import { QuestionsCTX, TimeCTX } from "../Context/Context";
import TimeOutModal from "../Components/TimeOutModal/TimeOutModal";
import { useNavigate } from "react-router-dom";
import BlueButton from "../Components/UI/BlueButton";
import QuitModal from "../Components/QuitModal/QuitModal";
import EmptyModal from "../Components/EmptyModal/EmptyModal";

function Question () {
    const questionsCTX = useContext(QuestionsCTX);
    const [questionCounter, setQuestionCounter] = useState(0);
    const actualQuestion = questionsCTX.questions[questionCounter];
    const [isChecked, setIsChecked] = useState(false);
    const [selected, isSelected] = useState('');
    const timeCTX = useContext(TimeCTX);
    const [counter, setCounter] = useState(timeCTX.time);
    const [timeOutModal, setTimeoutModal] = useState(false);
    const [last, setLast] = useState(false);
    const navigate = useNavigate();
    const [quitModal, setQuitModal] = useState(false);
    const [emptyModal, setEmptyModal] = useState(false);

    function checkHandler () {
        if (selected === '') {
            setEmptyModal(true);
            return;
        }
        setIsChecked(true);
    }

    function finishHandler () {
        navigate('/result');
    }

    function emptyModalHandler () {
        setEmptyModal(false);
    }

    function quitModalHandler () {
        setQuitModal(!quitModal);
    }

    function nextHandler () {
        setCounter(timeCTX.time);
        setQuestionCounter(questionCounter + 1);
        setIsChecked(false);
        setTimeoutModal(false);
        setSelected('');
    }

    function setSelected (element: string) {
        isSelected(element);
    }

    useEffect(() => {
        if (!isChecked && counter > 0) {
            const timeout = setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
        if (counter == 0 && !isChecked) {
            setTimeoutModal(true)
        }
    }, [counter, isChecked]);

    useEffect(() => {
        if (questionCounter === questionsCTX.questions.length - 1) setLast(true);
    }, [questionCounter, questionsCTX.questions.length]);
    
    return (
        <div className={styles.container}>
            <div className={styles['bar-container']}>
                <FontAwesomeIcon icon={faX} className={styles['x-icon']} onClick={quitModalHandler}/>
                <FilledBar numberOfQuestions={questionsCTX.questions.length} actual={questionCounter + 1}></FilledBar>
            </div>
            <div className={styles['timer-container']}>
                <Timer time={counter}></Timer>
            </div>
            <div className={styles['question-container']}>
                <h2 className={styles.text}>{actualQuestion.question}</h2>
            </div>
            {actualQuestion.answers.map((answer, index) => 
                <Answer
                    key={index} 
                    answer={answer} 
                    setSelected={setSelected} 
                    selected={selected}
                    isCorrectAnswer={actualQuestion.correct_answer == answer && isChecked}
                    isWrongAnswer={actualQuestion.correct_answer != answer && isChecked}
                    isChecked={isChecked}
                    correctAnswer={actualQuestion.correct_answer}
                />
            )}
            {last && <BlueButton onClick={isChecked ?  finishHandler : checkHandler}>
                {isChecked ? 'Finish' : 'Check'}
            </BlueButton>}
            {!last && <BlueButton onClick={isChecked ? nextHandler : checkHandler}>
                {isChecked ? 'Next' : 'Check'}
            </BlueButton>}
            {timeOutModal && <TimeOutModal nextHandle={last ? finishHandler : nextHandler}></TimeOutModal>}
            {quitModal && <QuitModal closeModal={quitModalHandler}></QuitModal>}
            {emptyModal && <EmptyModal closeModal={emptyModalHandler}></EmptyModal>}
        </div>
    )
}

export default Question