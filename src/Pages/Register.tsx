import styles from './Register.module.css';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BackendError } from '../Types/BackendError';
import FormContainer from '../UI/FromContainer';
import Input from '../Components/Input/Input';
import BlueButton from '../UI/BlueButton';
import { ErrorCTX, SuccessCTX } from '../Context/Context';

function Register () {
    const [errors, setErrors] = useState<BackendError[]>([]);
    const navigate = useNavigate();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const errorToasterState = useContext(ErrorCTX);
    const successToasterState = useContext(SuccessCTX);

    async function handleRegister() {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/create-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confirmPassword,
                })
            })
            const data = await response.json();

            if (response.status === 400) {
                let arr: BackendError[] = [];
                data.errors.forEach((error: BackendError) => {
                    arr.push(error);
                })
                setErrors(arr);
                return;
            }
            
            successToasterState.setSuccess(true);
            successToasterState.setMessage('Account created successfully. Please check your email inbox, including the spam folder, for a confirmation email.');
            
            navigate('/');
        } catch (error) {
            errorToasterState.setError(true);
        }
    }
    
    return (
        <FormContainer>
            <div className={styles['text-container']}>
                <h1>Sign up</h1>
                <p>Please sign up below</p>
            </div>
            <div className={styles['input-container']}>
                <Input 
                    type='text' 
                    placeholder='Name' 
                    isValid={errors.find(x => x.path == 'name') ? true : false} 
                    errorMessage={errors.find(x => x.path == 'name')?.msg} 
                    setValue={setName}
                />
                <Input 
                    type='email' 
                    placeholder='Email' 
                    isValid={errors.find(x => x.path == 'email') ? true : false} 
                    errorMessage={errors.find(x => x.path == 'email')?.msg} 
                    setValue={setEmail}
                />
                <Input 
                    type='password' 
                    placeholder='Password' 
                    isValid={errors.find(x => x.path == 'password' || x.path == 'confirmPassword') ? true : false} 
                    errorMessage={errors.find(x => x.path == 'password')?.msg} 
                    setValue={setPassword}
                />
                <Input 
                    type='password' 
                    placeholder='Confirm password' 
                    isValid={errors.find(x => x.path == 'confirmPassword') ? true : false} 
                    errorMessage={errors.find(x => x.path == 'confirmPassword')?.msg} 
                    setValue={setConfirmPassword}
                />
            </div>
            <BlueButton onClick={handleRegister} isBig={true}>Sign up</BlueButton>
            <div>
                <p>Already have account?<br></br>
                <span className={styles['login-link']}><Link to='/'>Login</Link></span></p>
            </div>
        </FormContainer>
    )
}

export default Register;