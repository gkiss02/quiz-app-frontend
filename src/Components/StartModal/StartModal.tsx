import Modal from '../../UI/Modal'
import Select from '../Select/Select'
import { useState, useContext } from 'react'
import { QuestionsCTX, TimeCTX } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
import BlueButton from '../../UI/BlueButton'
import RedButton from '../../UI/RedButton'
import styles from './StartModal.module.css'

const StartModal: React.FC <({closeModal: () => void, id: string})> = (props) => {
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
        questionsCTX.setReady(false);
    }

    return (
        <Modal closeModal={props.closeModal}>
            <Select 
                name='Difficulty' 
                arr={['Easy', 'Medium', 'Hard']} 
                setter={difficultyHandler}
            />
            <Select 
                name='Number of questions' 
                arr={['10', '25', '50']} 
                setter={numberOfQuestionsHandler}
            />
            <Select 
                name='Time' 
                arr={['30', '60', '120']} 
                setter={timeHandler}
            />
            {questionsCTX.notEnough && 
                <div className={styles['not-enough']}>
                    <p>Unfortunately there are no enough questions in our database yet!</p>
                    <p>Please change the difficulty or the category</p>
                </div>
            }
            <BlueButton onClick={startHandler}>
                {questionsCTX.loading ? 'Starting...' : 'Start'}
            </BlueButton>
            <RedButton onClick={props.closeModal}>
                Cancel
            </RedButton>
        </Modal>
    )
}

export default StartModal;