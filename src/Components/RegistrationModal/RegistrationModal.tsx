import styles from './RegistrationModal.module.css';
import Modal from '../../UI/Modal';
import BlueButton from '../../UI/BlueButton';
import ButtonContainer from '../../UI/ButtonContainer';

const RegistrationModal: React.FC<{closeModal: () => void}> = (props) => {
    function reg() {
        console.log('reg');
    }
        
    return (
        <Modal closeModal={props.closeModal}>
            <div className={styles.container}>
                <div className={styles['form-item']}>
                    <label>User name</label>
                    <input type='text' className={styles.input}/>
                </div>
                <div className={styles['form-item']}>
                    <label>Email</label>
                    <input type='email' className={styles.input}/>
                </div>
                <div className={styles['form-item']}>
                    <label>Password</label>
                    <input type='password' className={styles.input}/>
                </div>
                <div className={styles['form-item']}>
                    <label>Confirm password</label>
                    <input type='password' className={styles.input}/>
                </div>
            </div>
            <ButtonContainer>
                <BlueButton onClick={reg}>Register</BlueButton>
            </ButtonContainer>
        </Modal>
    )
}

export default RegistrationModal;