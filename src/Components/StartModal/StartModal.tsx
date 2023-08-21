import styles from './StartModal.module.css'
import modalStyles from '../../Styles/Modal.module.css'
import buttonStyles from '../../Styles/Button.module.css'
import { createPortal } from 'react-dom'
import Select from '../Select/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { QuestionsCTX, TimeCTX } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const Modal: React.FC <({closeModal: () => void, id: string})> = (props) => {
    const [difficulty, setDifficulty] = useState('easy');
    const [numberOfQuestions, setNumberOfQuestions] = useState('10');
    const timeCTX = useContext(TimeCTX);
    const questionsCTX = useContext(QuestionsCTX);
    const navigate = useNavigate();

    function difficultyHandler (element: string) {
        setDifficulty(element);
    }

    function numberOfQuestionsHandler (element: string) {
        setNumberOfQuestions(element);
    }

    function timeHandler (element: string) {
        timeCTX.setTime(element as unknown as number);
    }

    function startHandler () {
        questionsCTX.getQuestions(difficulty, numberOfQuestions, props.id);
    }

    if (questionsCTX.ready) {
        navigate('/question');
    }

    return (
        createPortal(
            <div className={modalStyles.container} onClick={props.closeModal}>
                <div className={modalStyles['modal-container']} onClick={event => event.stopPropagation()}>
                    <FontAwesomeIcon icon={faX} className={modalStyles.icon} onClick={props.closeModal}/>
                    <Select 
                        key={'difficulty'} 
                        name='Difficulty' 
                        arr={['Easy', 'Medium', 'Hard']} 
                        setter={difficultyHandler}
                    />
                    <Select 
                        key={'numberOfQuestions'} 
                        name='Number of questions' 
                        arr={['10', '25', '50']} 
                        setter={numberOfQuestionsHandler}
                    />
                    <Select 
                        key={'time'} 
                        name='Time' 
                        arr={['30', '60', '120']} 
                        setter={timeHandler}
                    />
                    <button className={`${buttonStyles.button} ${buttonStyles['blue-button']}`} onClick={startHandler}>
                        {questionsCTX.loading ? 'Starting...' : 'Start'}
                    </button>
                    <button className={`${buttonStyles.button} ${buttonStyles['red-button']}`} onClick={props.closeModal}>
                        Cancel
                    </button>
                </div>
            </div>,
            document.body)
    )
}

export default Modal