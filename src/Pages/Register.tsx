import styles from './Register.module.css';
import { useRef } from 'react';

function Register () {
    let userNameRef = useRef<HTMLInputElement>(null);
    let emailRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null);
    let passwordConfirmRef = useRef<HTMLInputElement>(null);

    function handleRegister() {
        fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userNameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                passwordConfirm: passwordConfirmRef.current?.value
            })
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <h1>Sign up</h1>
                <p>Please sign up below</p>
            </div>
            <div className={styles['input-container']}>
                <input type='text' className={styles.input} placeholder='Username' ref={userNameRef}></input>
                <input type='text' className={styles.input} placeholder='Email' ref={emailRef}></input>
                <input type='password' className={styles.input} placeholder='Password' ref={passwordRef}></input>
                <input type='password' className={styles.input} placeholder='Confirm password' ref={passwordConfirmRef}></input>
            </div>
            <button className={styles.button} onClick={handleRegister}>Sign up</button>
        </div>
    )
}

export default Register;