import BlueButton from "../../UI/BlueButton";
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
                <div>
                    <BlueButton onClick={signIn}>Sign in</BlueButton>
                </div>
            </div>
        </Modal>
    );
}

export default LoginModal;