import styles from './Login.module.css';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import FormContainer from '../UI/FromContainer';
import BlueButton from '../UI/BlueButton';
import Input from '../Components/Input/Input';
import { Checkbox, SnackbarCloseReason } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ErrorCTX } from '../Context/Context';

function Login () {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [invalidUser, setInvalidUser] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const errorToasterState = useContext(ErrorCTX);

    const navigate = useNavigate();

    async function handleLogin() {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json();

            if (response.status === 401 || response.status === 403) {
                setInvalidUser(true);
                setError(data.message);
                return;
            }

            if (!response.ok) {
                errorToasterState.setError(true);
                setLoading(false);
                return;
            }

            if (rememberMe) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                const expirationDate = new Date();
                expirationDate.setHours(expirationDate.getHours() + 1);
                localStorage.setItem('expirationDate', expirationDate.toISOString());
            } else {
                sessionStorage.setItem('accessToken', data.accessToken);
                sessionStorage.setItem('refreshToken', data.refreshToken);
                const expirationDate = new Date();
                expirationDate.setHours(expirationDate.getHours() + 1);
                sessionStorage.setItem('expirationDate', expirationDate.toISOString());
            }

            navigate('/');
            setLoading(false);
            
        } catch (error) {
            errorToasterState.setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormContainer>
            <div className={styles['text-container']}>
                <h1>Login</h1>
                <p>Please login below</p>
            </div>
            <div className={styles['input-container']}>
                <Input 
                    type='email' 
                    placeholder='Email' 
                    isValid={invalidUser}
                    setValue={setEmail}
                />
                <Input 
                    type='password' 
                    placeholder='Password' 
                    isValid={invalidUser}
                    setValue={setPassword}
                    errorMessage={error}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles['remember-me']}>
                <Checkbox
                    onChange={() => {setRememberMe(!rememberMe)}}
                    checked={rememberMe}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    sx={{
                        color: '#3eb8d4',
                        '&.Mui-checked': {
                            color: '#3eb8d4'
                        },
                        '& .MuiSvgIcon-root': { fontSize: 20 }
                    }}
                />
                    <p>Remember me</p>
                </div>
                <Link to='/forgot-password'>Forgot password?</Link>
            </div>
            <BlueButton onClick={handleLogin} isBig={true}>{loading ? 'Login...' : 'Login'}</BlueButton>
            <div>
                <p>Don't have an account?<br></br>
                <span className={styles['register-link']}><Link to='/register'>Register</Link></span></p>
            </div>
        </FormContainer>
    )
}

export default Login;
