import styles from './Modal.module.css';
import {createPortal} from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Modal: React.FC<({children: React.ReactNode, closeModal: () => void })> = (props) => {
    return (
        createPortal (
        <div className={styles.container} onClick={props.closeModal}>
            <div className={styles['modal-container']} onClick={event => event.stopPropagation()}>
                <FontAwesomeIcon icon={faX} className={styles.icon} onClick={props.closeModal}/>
                {props.children}
            </div>
        </div>
        , document.body)
    )
}

export default Modal;