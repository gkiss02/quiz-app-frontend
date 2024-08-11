import styles from './Leaderboard.module.css'
import LeaderboardSelector from '../Components/LeaderboardSelector/LeaderboardSelector';
import Winners from '../Components/Winners/Winners';
import Rank from '../Components/Rank/Rank';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../Util/auth';
import { UserWithScore } from '../Types/UserWithScore';

function Leaderboard () {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('allTime')
    const [users, setUsers] = useState<UserWithScore[]>([])

    const backIcon = require('../Images/back-white.png')
    const avatarIcon = require('../Images/man.png')
    const crownIcon = require('../Images/crown.png')

    function toHome () {
        navigate('/main')
    }

    useEffect(() => {
        (async function () {
            const response = await fetch(`http://localhost:8080/rankings/${selected}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })
            const data = await response.json();
            let usersArr: UserWithScore[] = [];
            for (let i = 0; i < data.users.length; i++) {
                usersArr.push(data.users[i]);
            }
            setUsers(usersArr);
        }());
    }, [selected]);

    return (
        <div>
            <div className={styles['top-3']}>
                <div className={styles['helper-container']}>
                    <div className={styles['header-container']}>
                        <div className={styles['icon-container']}>
                            <img src={backIcon} className={styles.icon} onClick={toHome}></img>
                        </div>
                        <h1 className={styles.title}>Leaderboard</h1>
                    </div>
                    <div className={styles.wrapper}>
                        <LeaderboardSelector selected={setSelected}></LeaderboardSelector>
                        <img src={crownIcon} className={styles.crown}></img>
                        <div className={styles['winners-container']}>
                            <Winners src={avatarIcon} result="2" name={users[1]?.name} score={users[1]?.score}></Winners>
                            <Winners src={avatarIcon} result="1" name={users[0]?.name} score={users[0]?.score}></Winners>
                            <Winners src={avatarIcon} result="3" name={users[2]?.name} score={users[2]?.score}></Winners>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['top-10']}>
                {users.map((user, index) => 
                    index >= 4 && index <= 10 && <Rank key={index} src={user?.img} name={user?.name} score={user?.score} result={index + 1}></Rank>
                )}
            </div>
        </div>
    )
}

export default Leaderboard;
