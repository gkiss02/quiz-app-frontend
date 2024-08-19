import { useEffect } from "react";
import BlueButton from "../UI/BlueButton";
import { useNavigate } from "react-router-dom";
import styles from './ConfirmEmail.module.css'

function ConfirmEmail() {
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            const token = window.location.search.split('=')[1];
            
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/confirm-email/${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
        })();
    }, [])
    
    return (
        <div className={styles.container}>
            <h1>Email successfully confirmed!</h1>
            <img src="https://i.ibb.co/SJGwnq8/check-mail.png" className={styles.icon}/>
            <BlueButton onClick={()=>navigate('/')}>Login</BlueButton>
        </div>
    );
}

export default ConfirmEmail;