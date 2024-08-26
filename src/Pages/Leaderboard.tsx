import styles from './Leaderboard.module.css'
import LeaderboardSelector from '../Components/LeaderboardSelector/LeaderboardSelector';
import Winners from '../Components/Winners/Winners';
import Rank from '../Components/Rank/Rank';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../util/auth';
import { UserWithScore } from '../Types/UserWithScore';
import { CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Leaderboard () {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('allTime')
    const [users, setUsers] = useState<UserWithScore[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            setLoading(true);
            try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/rankings/${selected}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            let usersArr: UserWithScore[] = [];
            for (let i = 0; i < data.users.length; i++) {
                usersArr.push(data.users[i]);
            }
            setUsers(usersArr);
            
            } catch (error) {
                navigate('/error-page');
            } finally {
                setLoading(false);
            }
        }());
    }, [selected]);

    return (
        <div>
            <div className={styles['top-3']}>
                <div className={styles['helper-container']}>
                    <div className={styles['header-container']}>
                        <div className={styles['icon-container']}>
                            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={() => navigate('/')}/>
                        </div>
                        <h1 className={styles.title}>Leaderboard</h1>
                    </div>
                    <div className={styles.wrapper}>
                        <LeaderboardSelector selected={setSelected} />
                        <img src='https://i.ibb.co/LNZyVfy/crown.png' className={styles.crown}></img>
                        <div className={styles['winners-container']}>
                            <Winners src={users[1]?.profilePicture} result='2' name={users[1]?.name} score={users[1]?.score} />
                            <Winners src={users[0]?.profilePicture} result='1' name={users[0]?.name} score={users[0]?.score} />
                            <Winners src={users[2]?.profilePicture} result='3' name={users[2]?.name} score={users[2]?.score} />
                        </div>
                    </div>
                </div>
            </div>
            {loading && <div className={styles.loader}>
                <CircularProgress size={120} sx={{color: '#737373'}} />
            </div>}
            <div className={styles['top-10']}>
                {users.map((user, index) => 
                    index >= 4 && index <= 10 && <Rank key={index} src={user?.profilePicture} name={user?.name} score={user?.score} result={index + 1} />
                )}
            </div>
        </div>
    )
}

export default Leaderboard;
