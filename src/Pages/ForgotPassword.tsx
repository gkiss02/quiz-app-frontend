import { useContext, useState } from 'react';
import Input from '../Components/Input/Input';
import FormContainer from '../UI/FromContainer';
import BlueButton from '../UI/BlueButton';
import styles from './ForgotPassword.module.css';
import { useNavigate } from 'react-router-dom';
import { ErrorCTX, SuccessCTX } from '../Context/Context';

function ForgotPassword() {
    const [email, setEmail] = useState<string>();
    const navigate = useNavigate();
    const errorToasterState = useContext(ErrorCTX);
    const successToasterState = useContext(SuccessCTX);

    async function sendEmail() {
        try {
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

            if (data.error) {
                throw new Error(data.error);
            }

            successToasterState.setSuccess(true);
            successToasterState.setMessage('Email sent successfully. Please check your email, including the spam folder.');
            navigate('/');

        } catch (error) {
            errorToasterState.setError(true);
        }
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