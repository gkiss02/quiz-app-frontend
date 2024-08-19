import styles from './Settings.module.css';
import BlueButton from '../UI/BlueButton';
import ButtonContainer from '../UI/ButtonContainer';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getAuthToken } from '../Util/auth';
import { User } from '../Types/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../Components/DeleteModal/DeleteModal';
import { BackendError } from '../Types/BackendError';

function Settings() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User>();
  const [profilePicture, setProfilePicture] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState<BackendError[]>([]);
  const [passwordError, setPasswordError] = useState<BackendError[]>([]);

  const pictures: string[] = [];

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function profilePictureClick(event: any) {
    setProfilePicture(event.target.src);
  }

  async function updateProfilePicture() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/update-profile-picture`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          profilePicture
      })
    })
  }

  async function updateEmail() {
    const response =  await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/update-email`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: emailRef.current?.value
      })
    })
    const data = await response.json();

    if (response.status === 400) {
      let arr: BackendError[] = [];
      data.errors.forEach((error: BackendError) => {
          arr.push(error);
      })
      setEmailError(arr);
    }
  }

  async function updatePassword() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/update-password`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      setPasswordError(arr);
    } 
  }

  useEffect(() => {
    (async function() {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/me`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + getAuthToken(),
        },
      });
      const data = await response.json();
      setUser(data);
      setProfilePicture(data.profilePicture);
    })();
  }, []);

  pictures.push('https://i.ibb.co/Bg4G0m5/woman1.png')
  pictures.push('https://i.ibb.co/JzNqyv7/woman2.png')
  pictures.push('https://i.ibb.co/2g9qyNt/woman3.png')
  pictures.push('https://i.ibb.co/tsShGjD/woman4.png')
  pictures.push('https://i.ibb.co/18qpxs6/woman5.png')
  pictures.push('https://i.ibb.co/SQb81Qk/woman6.png')
  pictures.push('https://i.ibb.co/4j0fH2X/woman7.png')
  pictures.push('https://i.ibb.co/8rQcDVd/woman8.png')
  pictures.push('https://i.ibb.co/s633K4Y/woman9.png')
  pictures.push('https://i.ibb.co/SsFwpgY/woman10.png')
  pictures.push('https://i.ibb.co/8cD2yHq/man1.png')
  pictures.push('https://i.ibb.co/w6LNC43/man2.png')
  pictures.push('https://i.ibb.co/mhdMdtz/man3.png')
  pictures.push('https://i.ibb.co/6nnDNMD/man4.png')
  pictures.push('https://i.ibb.co/N92K8v9/man5.png')
  pictures.push('https://i.ibb.co/mThDMXb/man6.png')
  pictures.push('https://i.ibb.co/CKW50DB/man7.png')
  pictures.push('https://i.ibb.co/x8RZx79/man8.png')
  pictures.push('https://i.ibb.co/mT3GfQV/man9.png')
  pictures.push('https://i.ibb.co/58Tcxv7/man10.png')

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={() => navigate('/')}/>
      <div className={styles['element-container']}>
        <h2>Profile Picture</h2>
        <div className={styles['input-container']}>
          <div className={styles['image-container']}>
            {pictures.map((image, index) =>
              <div className={styles['image-wrapper']} onClick={profilePictureClick}>
                {profilePicture == image && <FontAwesomeIcon icon={faCheck} className={styles.marker}/>}
                <img key={index} src={image} className={`${styles.image}`}></img>
              </div>
            )}
          </div>
          <ButtonContainer>
            <BlueButton onClick={updateProfilePicture}>Save</BlueButton>
          </ButtonContainer>
        </div>
      </div>
      <div className={styles['element-container']}>
        <h2>Email</h2>
        <div className={styles['input-container']}>
          <input type='email' placeholder={user?.email} className={`${styles.input} ${emailError.length > 0 && styles['error-border']}`} ref={emailRef}></input>
          <p className={styles['error-text']}>{emailError.length > 0 && emailError[0].msg}</p>
          <ButtonContainer>
            <BlueButton onClick={updateEmail}>Save</BlueButton>
          </ButtonContainer>
        </div>
      </div>
      <div className={styles['element-container']}>
        <h2>Password</h2>
        <div className={styles['input-container']}>
          <label>New password</label>
          <input type='password' placeholder='••••••••' className={`${styles.input} ${passwordError.length > 0 && styles['error-border']}`} ref={passwordRef}></input>
          <label>Confirm password</label>
          <input type='password' placeholder='••••••••' className={`${styles.input} ${passwordError.length > 0 && styles['error-border']}`} ref={confirmPasswordRef}></input>
          <p className={styles['error-text']}>{passwordError.length > 0 && passwordError[0].msg}</p>
          <ButtonContainer>
            <BlueButton onClick={updatePassword}>Save</BlueButton>
          </ButtonContainer>
        </div>
      </div>
      <div className={styles['element-container']}>
        <div className={styles['single-item']}>
          <h2>Dark mode</h2>
          <Switch></Switch>
        </div>
      </div>
      <div className={styles['delete-button_container']}>
        <button className={styles['delete-button']} onClick={showModalHandler}>Delete Profile</button>
      </div>
      {showModal && <DeleteModal closeModal={closeModal}></DeleteModal>}
    </div>
  );
}

export default Settings;
