import styles from './Answer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type AnswerProps = {
    answer: string,
    setSelected: (element: string) => void,
    selected: string,
    correctAnswer: boolean,
    wrongAnswer: boolean,
    isChecked: boolean,
}

const Answer: React.FC <AnswerProps> = (props) => {
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
                ${props.correctAnswer && styles['correct-answer']}
                ${props.wrongAnswer && props.selected == props.answer && styles['wrong-answer']}
            `} 
            onClick={!props.isChecked ? clickHandle : () => {}}
        >
            <p>{props.answer}</p>
            <div 
                className={`
                    ${styles.circle} 
                    ${props.correctAnswer && styles['correct-circle']} 
                    ${props.wrongAnswer && props.selected == props.answer && styles['wrong-circle']}
                    `}
                >
                {props.correctAnswer && <FontAwesomeIcon className={styles.icon} icon={faCheck}/>}
                {props.wrongAnswer && props.selected == props.answer && <FontAwesomeIcon className={styles.icon} icon={faX}/>}
            </div>
        </div>
    )
}

export default Answer