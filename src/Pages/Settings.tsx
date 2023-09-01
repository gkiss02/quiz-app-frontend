import styles from './Settings.module.css';
import BlueButton from '../UI/BlueButton';
import ButtonContainer from '../UI/ButtonContainer';
import Switch from '@mui/material/Switch';

function Settings() {
    const backIcon = require('../Images/back.png')
    function saveHandler () {
        console.log('save');
    }

    return (
        <div className={styles.container}>
            <img src={backIcon} className={styles.icon}></img>
            <div className={styles['element-container']}>
                <h2>Email</h2>
                <div className={styles['input-container']}>
                    <input type="email" className={styles.input}></input>
                    <ButtonContainer>
                        <BlueButton onClick={saveHandler}>Save</BlueButton>
                    </ButtonContainer>
                </div>
            </div>
            <div className={styles['element-container']}>
                <h2>Password</h2>
                <div className={styles['input-container']}>
                    <label>New password</label>
                    <input type="password" className={styles.input}></input>
                    <label>Confirm password</label>
                    <input type="password" className={styles.input}></input>
                    <ButtonContainer>
                        <BlueButton onClick={saveHandler}>Save</BlueButton>
                    </ButtonContainer>
                </div>
            </div>
            <div className={styles['element-container']}>
                <div className={styles['single-item']}>
                    <h2>Dark mode</h2>
                    <Switch></Switch>
                </div> 
            </div>
        </div>
    );
}

export default Settings;