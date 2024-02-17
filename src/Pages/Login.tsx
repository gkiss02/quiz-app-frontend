import styles from './Login.module.css';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login () {
    let emailRef = useRef<HTMLInputElement>(null);
    let passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function handleLogin() {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            })
        })
        const data = await response.json();
        localStorage.setItem('token', data.token);

        if (response.ok) {
            navigate('/main');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <h1>Login</h1>
                <p>Please login below</p>
            </div>
            <div className={styles['input-container']}>
                <input type='text' className={styles.input} placeholder='Email' ref={emailRef}></input>
                <input type='password' className={styles.input} placeholder='Password' ref={passwordRef}></input>
            </div>
            <button className={styles.button} onClick={handleLogin}>Login</button>
            <div>
                <p>Don't have an account?<br></br>
                <span className={styles.register}><Link to='/register'>Register</Link></span></p>
            </div>
        </div>
    )
}

export default Login;
