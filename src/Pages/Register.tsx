import styles from './Register.module.css';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BackendError } from '../Types/BackendError';

function Register () {
    let nameRef = useRef<HTMLInputElement>(null);
    let emailRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null);
    let confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<BackendError[]>([]);
    const navigate = useNavigate();

    async function handleRegister() {
        const response = await fetch('http://localhost:8080/users/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                confirmPassword: confirmPasswordRef.current?.value
            })
        })
        const data = await response.json();

        if (response.status === 400) {
            let arr: BackendError[] = [];
            data.errors.forEach((error: BackendError) => {
                arr.push(error);
            })
            setErrors(arr);
        }

        if (response.ok) {
            navigate('/');
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <h1>Sign up</h1>
                <p>Please sign up below</p>
            </div>
            <div className={styles['input-container']}>
                <input type='text' className={`${styles.input} ${errors.find(x => x.path == 'name') && styles['error-border']}`} placeholder='Name' ref={nameRef}/>
                    {errors.length > 0 && errors.find(x => x.path == 'name') && 
                    <p className={styles['error-text']}>{errors.find(x => x.path == 'name')?.msg}</p>}
                <input type='text' className={`${styles.input} ${errors.find(x => x.path == 'email') && styles['error-border']}`} placeholder='Email' ref={emailRef}/>
                    {errors.length > 0 && errors.find(x => x.path == 'email') && 
                    <p className={styles['error-text']}>{errors.find(x => x.path == 'email')?.msg}</p>}
                <input type='password' className={`${styles.input} ${errors.find(x => x.path == 'password') && styles['error-border']}`} placeholder='Password' ref={passwordRef}/>
                    {errors.length > 0 && errors.find(x => x.path == 'password') && 
                    <p className={styles['error-text']}>{errors.find(x => x.path == 'password')?.msg}</p>}
                <input type='password' className={`${styles.input} ${errors.find(x => x.path == 'password') && styles['error-border']}`} placeholder='Confirm password' ref={confirmPasswordRef}/>
            </div>
            <button className={styles.button} onClick={handleRegister}>Sign up</button>
            <div>
                <p>Already have account?<br></br>
                <span className={styles.register}><Link to='/'>Login</Link></span></p>
            </div>
        </div>
    )
}

export default Register;