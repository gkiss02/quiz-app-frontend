import { useState } from 'react';
import Input from '../Components/Input/Input';
import FormContainer from '../UI/FromContainer';
import BlueButton from '../UI/BlueButton';
import styles from './ForgotPassword.module.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState<string>();
    const navigate = useNavigate();

    async function sendEmail() {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
        const data = await response.json();
        navigate('/');
    }

    return (
        <FormContainer>
            <div className={styles['text-container']}>
                <h1>Forgot password</h1>
                <p>Please type your email below</p>
            </div>
            <Input
                type='email'
                placeholder='Email'
                setValue={setEmail}
            />
            <BlueButton onClick={sendEmail} isBig={true}>Send Email</BlueButton>
        </FormContainer>
    );
}

export default ForgotPassword;