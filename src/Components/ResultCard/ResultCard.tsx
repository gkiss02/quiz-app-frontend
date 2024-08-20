import styles from './ResultCard.module.css'
import ResultComponent from './ResultComponent'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { getAuthToken } from '../../Util/auth'
import { ErrorCTX } from '../../Context/Context'

function ResultCard () {
    const navigate = useNavigate()
    const [myRanking, setMyRanking] = useState(Object);
    const errorToasterState = useContext(ErrorCTX);

    function clickHandle () {
        navigate('/leaderboard')
    }

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/rankings/my-ranking`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + getAuthToken()
                    }
                })

                const data = await response.json();
            
                if (data.error) {
                    throw new Error(data.error);
                }

                setMyRanking(data);
            } catch (error) {
                errorToasterState.setError(true);
            }
        }())
    }, [])

    return (
        <div className={styles.container} onClick={clickHandle}>
            <ResultComponent src="https://i.ibb.co/9T26kHw/trophy.png" title='Ranking' number={myRanking.rank} />
            <div className={styles.line}></div>
            <ResultComponent src="https://i.ibb.co/Q6WzXFz/coin.png" title='Points' number={myRanking.score}/>
        </div>
    )
}

export default ResultCard