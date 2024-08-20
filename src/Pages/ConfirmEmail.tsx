import { useContext, useEffect } from 'react';
import BlueButton from '../UI/BlueButton';
import { useNavigate } from 'react-router-dom';
import styles from './ConfirmEmail.module.css'
import { ErrorCTX } from '../Context/Context';

function ConfirmEmail() {
    const navigate = useNavigate();
    const errorToasterState = useContext(ErrorCTX);

    useEffect(() => {
        (async function () {
            try {
                const token = window.location.search.split('=')[1];
                
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/confirm-email/${token}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json();
            } catch (error) {
                errorToasterState.setError(true);
            }
        })();
    }, [])
    
    return (
        <div className={styles.container}>
            <h1>Email successfully confirmed!</h1>
            <img src='https://i.ibb.co/SJGwnq8/check-mail.png' className={styles.icon}/>
            <BlueButton onClick={()=>navigate('/')}>Login</BlueButton>
        </div>
    );
}

export default ConfirmEmail;