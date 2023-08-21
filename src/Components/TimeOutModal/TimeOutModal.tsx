import styles from './TimeOutModal.module.css'
import modalStyles from '../../Styles/Modal.module.css'
import buttonStyles from '../../Styles/Button.module.css'
import { createPortal } from 'react-dom'

const TimeOutModal: React.FC <({nextHandle : () => (void)})> = (props) => {
    return (
        createPortal (
            <div className={modalStyles.container}>
                <div className={modalStyles['modal-container']}>
                    <h2 className={styles.text}>You ran out of time!</h2>
                    <button className={`${buttonStyles.button} ${buttonStyles['blue-button']}`} onClick={props.nextHandle}>
                        Next
                    </button>
                </div>
            </div>
        , document.body)
    )
}

export default TimeOutModal;