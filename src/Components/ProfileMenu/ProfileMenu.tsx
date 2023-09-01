import styles from './ProfileMenu.module.css'

function ProfileMenu () {
    const myGamesIcon = require('../../Images/mission.png')
    const leaderboardIcon  = require('../../Images/podium.png')
    const settingsIcon  = require('../../Images/settings.png')
    const logoutIcon = require('../../Images/check-out.png')

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <img src={myGamesIcon} className={styles.icon}></img>
                <p>My games</p>
            </div>
            <div className={styles.item}>
                <img src={leaderboardIcon} className={styles.icon}></img>
                <p>Leaderboard</p>
            </div>
            <div className={styles.item}>
                <img src={settingsIcon} className={styles.icon}></img>
                <p>Settings</p>
            </div>
            <div className={styles.item}>
                <img src={logoutIcon} className={styles.icon}></img>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default ProfileMenu