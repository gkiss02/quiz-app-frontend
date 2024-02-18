import styles from './LeaderboardSelector.module.css'
import { useState } from 'react'

const LeaderboardSelector:React.FC<({selected: (s: string) => void})> = (props) => {
    const [selected, setSelected] = useState('allTime')

    function clickHandle (event: any) {
        setSelected(event.target.id)
        props.selected(event.target.id)
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.element} ${selected == 'allTime' && styles.active}`} onClick={clickHandle} id='allTime'>All time</div>
            <div className={`${styles.element} ${selected == 'weekly' && styles.active}`} onClick={clickHandle} id='weekly'>This week</div>
            <div className={`${styles.element} ${selected == 'monthly' && styles.active}`} onClick={clickHandle} id='monthly'>This month</div>
        </div>
    )
}

export default LeaderboardSelector;