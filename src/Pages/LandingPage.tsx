import styles from './LandingPage.module.css';
import BlueButton from '../UI/BlueButton';
import LoginModal from '../Components/LoginModal/LoginModal';
import RegistrationModal from '../Components/RegistrationModal/RegistrationModal';
import { useState } from 'react';

function LandingPage() {
    const quizLogo = require('../Images/quizlogo.png');
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [regModalVisible, setRegModalVisible] = useState(false);

    function loginModalVisibleHandler() {
        setLoginModalVisible(!loginModalVisible);
    }

    function regModalVisibleHandler() {
        setRegModalVisible(!regModalVisible);
    }

    return (
        <div className={styles.container}>
            <img src={quizLogo}  className={styles.logo}/>
            <h1 className={styles.header}>Welcome to the QUIZ APP!</h1>
            <BlueButton onClick={regModalVisibleHandler}>Join us!</BlueButton>
            <div className={styles['text-container']}>
                <p>Already have account?</p>
                <p className={styles['sign-in']} onClick={loginModalVisibleHandler}>Sign in</p>
            </div>
            {loginModalVisible && <LoginModal closeModal={loginModalVisibleHandler}></LoginModal>}
            {regModalVisible && <RegistrationModal closeModal={regModalVisibleHandler}></RegistrationModal>}
        </div>
    );
}

export default LandingPage;