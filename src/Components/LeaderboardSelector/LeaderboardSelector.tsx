import styles from './LeaderboardSelector.module.css'
import { useState } from 'react'

function LeaderboardSelector () {
    const [selected, setSelected] = useState('all-time')

    function clickHandle (event: any) {
        setSelected(event.target.id)
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.element} ${selected == 'all-time' && styles.active}`} onClick={clickHandle} id='all-time'>All time</div>
            <div className={`${styles.element} ${selected == 'this-week' && styles.active}`} onClick={clickHandle} id='this-week'>This week</div>
            <div className={`${styles.element} ${selected == 'this-month' && styles.active}`} onClick={clickHandle} id='this-month'>This month</div>
        </div>
    )
}

export default LeaderboardSelector