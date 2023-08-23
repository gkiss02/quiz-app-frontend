import Modal from '../UI/Modal'
import styles from './TimeOutModal.module.css'
import BlueButton from '../UI/BlueButton'

const TimeOutModal: React.FC <({nextHandle: () => void})> = (props) => {
    return (
        <Modal closeModal={props.nextHandle}>
            <h2 className={styles.text}>You ran out of time!</h2>
            <BlueButton onClick={props.nextHandle}>Next</BlueButton>
        </Modal>
    )
}

export default TimeOutModal;