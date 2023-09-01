import BlueButton from "../../UI/BlueButton";
import ButtonContainer from "../../UI/ButtonContainer";
import Modal from "../../UI/Modal";
import styles from './LoginModal.module.css';

const LoginModal: React.FC<({closeModal: () => void})> = (props) => {
    function signIn() {
        console.log('Sign in!');
    }

    return (
        <Modal closeModal={props.closeModal}>
            <div className={styles.form}>
                <div className={styles['form-container']}>
                    <div className={styles['form-item']}>
                        <label>Username or email address</label>
                        <input type="text" className={styles.input}></input>
                    </div>
                    <div className={styles['form-item']}>
                        <label>Password</label>
                        <input type="password" className={styles.input}></input>
                    </div>
                </div>
                <div className={styles['remember-me']}>
                    <input type="checkbox"></input>
                    <p>Remember me</p>
                </div>
                <ButtonContainer>
                    <BlueButton onClick={signIn}>Sign in</BlueButton>
                </ButtonContainer>
            </div>
        </Modal>
    );
}

export default LoginModal;