import styles from './Modal.module.css'
import { createPortal } from 'react-dom'
import Select from '../Select/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { QuestionsCTX } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Modal: React.FC <({closeModal: () => void, id: string})> = (props) => {
    const [difficulty, setDifficulty] = useState('easy');
    const [numberOfQuestions, setNumberOfQuestions] = useState('10');
    const [time, setTime] = useState('30');
    const questionsCTX = useContext(QuestionsCTX);
    const navigate = useNavigate();

    function difficultyHandler (element: string) {
        setDifficulty(element);
    }

    function numberOfQuestionsHandler (element: string) {
        setNumberOfQuestions(element);
    }

    function timeHandler (element: string) {
        setTime(element);
    }

    function startHandler () {
        console.log(difficulty, numberOfQuestions, time, props.id);
        questionsCTX.getQuestions(difficulty, numberOfQuestions, props.id);
    }

    if (questionsCTX.ready) {
        navigate('/question');
    }

    return (
        createPortal(
            <div className={styles.container} onClick={props.closeModal}>
                <div className={styles['modal-container']} onClick={event => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faX} className={styles['icon']} onClick={props.closeModal}/>
                    <Select key={'difficulty'} name='Difficulty' arr={['Easy', 'Medium', 'Hard']} setter={difficultyHandler}></Select>
                    <Select key={'numberOfQuestions'} name='Number of questions' arr={['10', '25', '50']} setter={numberOfQuestionsHandler}></Select>
                    <Select key={'time'} name='Time' arr={['30', '60', '120']} setter={timeHandler}></Select>
                    <button className={styles.start} onClick={startHandler}>{questionsCTX.loading ? 'Starting...' : 'Start'}</button>
                    <button className={styles.cancel} onClick={props.closeModal}>Cancel</button>
                </div>
            </div>,
            document.body)
    )
}

export default Modal