import styles from './ProfileMenu.module.css'
import { useNavigate, useSubmit } from 'react-router-dom';

function ProfileMenu () {
    const submit = useSubmit();
    const navigate = useNavigate();

    function toSettings () {
        navigate('/settings')
    }

    function logout () {
        submit(null, { action: '/logout', method: 'post' });
    }

    return (
        <div className={styles.container}>
            <div className={styles.item}  onClick={toSettings}>
                <img src="https://i.ibb.co/GHJL13X/settings.png" className={styles.icon} />
                <p>Settings</p>
            </div>
            <div className={styles.item} onClick={logout}>
                <img src="https://i.ibb.co/D5C6yTQ/check-out.png" className={styles.icon} />
                <p>Logout</p>
            </div>
        </div>
    )
}

export default ProfileMenu