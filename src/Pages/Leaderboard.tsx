import styles from './Leaderboard.module.css'
import LeaderboardSelector from '../Components/LeaderboardSelector/LeaderboardSelector';
import Winners from '../Components/Winners/Winners';
import Rank from '../Components/Rank/Rank';

function Leaderboard () {
    const backIcon = require('../Images/back-white.png')
    const avatarIcon = require('../Images/man.png')
    const crownIcon = require('../Images/crown.png')

    class User {
        name: string;
        score: string;
        img: string;
        constructor(name: string, score: string, img: string) {
            this.name = name;
            this.score = score;
            this.img = img;
        }
    }

    const users: User[] = [
        new User('Smith Carol', '12345', avatarIcon),
        new User('Stina Gunnarsdottir', '12345', avatarIcon),
        new User('Benedikt Safiyulin', '12345', avatarIcon),
        new User('Gabriel Soares', '12345', avatarIcon),
        new User('Yahiro Ayuko', '12345', avatarIcon),
        new User('Saami Al Samad', '12345', avatarIcon),
        new User('Said Mohamed', '12345', avatarIcon),
    ]

    return (
        <div>
            <div className={styles['top-3']}>
                <div className={styles['helper-container']}>
                    <div className={styles['header-container']}>
                        <div className={styles['icon-container']}>
                            <img src={backIcon} className={styles.icon}></img>
                        </div>
                        <h1 className={styles.title}>Leaderboard</h1>
                    </div>
                    <div className={styles.wrapper}>
                        <LeaderboardSelector></LeaderboardSelector>
                        <img src={crownIcon} className={styles.crown}></img>
                        <div className={styles['winners-container']}>
                            <Winners src={avatarIcon} result="2" name='Lennert Niva' score='12345'></Winners>
                            <Winners src={avatarIcon} result="1" name='John Doe' score='12345'></Winners>
                            <Winners src={avatarIcon} result="3" name='David James' score='12345'></Winners>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['top-10']}>
                {users.map((user, index) => 
                    <Rank key={index} src={user.img} name={user.name} score={user.score} result={index + 4}></Rank>
                )}
            </div>
        </div>
    )
}

export default Leaderboard;