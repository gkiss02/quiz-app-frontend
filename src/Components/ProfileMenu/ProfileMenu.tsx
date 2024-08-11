import styles from './ProfileMenu.module.css'
import { useNavigate } from 'react-router-dom';

function ProfileMenu () {
    const settingsIcon  = require('../../Images/settings.png')
    const logoutIcon = require('../../Images/check-out.png')
    const navigate = useNavigate();

    function toSettings () {
        navigate('/settings')
    }

    function logout () {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.item}  onClick={toSettings}>
                <img src={settingsIcon} className={styles.icon}></img>
                <p>Settings</p>
            </div>
            <div className={styles.item} onClick={logout}>
                <img src={logoutIcon} className={styles.icon}></img>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default ProfileMenu