import FilledBar from "../Components/FilledBar/FilledBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import styles from './Question.module.css';
import Timer from "../Components/Timer/Timer";
import Answer from "../Components/Answer/Answer";
import { useState, useContext } from "react";
import { QuestionsCTX } from "../Context/Context";

function Question () {
    const questionsCTX = useContext(QuestionsCTX);
    const [questionCounter, setQuestionCounter] = useState(0);
    const actualQuestion = questionsCTX.questions[questionCounter];

    function clickHandle () {
        setQuestionCounter(questionCounter + 1);
    }

    const answers = [];
    answers.push(actualQuestion.correct_answer, ...actualQuestion.incorrect_answers);
    answers.sort(() => Math.random() - 0.5);

    return (
        <div className={styles.container}>
            <div className={styles['bar-container']}>
                <FontAwesomeIcon icon={faX} className={styles['x-icon']}/>
                <FilledBar numberOfQuestions={questionsCTX.questions.length} actual={questionCounter + 1}></FilledBar>
            </div>
            <div className={styles['timer-container']}>
                <Timer></Timer>
            </div>
            <div className={styles['question-container']}>
                <h2>{actualQuestion.question}</h2>
            </div>
            {answers.map((answer) => 
                <Answer answer={answer}></Answer>
            )}
            <button className={styles.button} onClick={clickHandle}>Next</button>
        </div>
    )
}

export default Question