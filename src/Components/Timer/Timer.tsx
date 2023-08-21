import styles from './Timer.module.css';

const Timer: React.FC <({time: number})> = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles['circle-container']}>
                <div className={styles.bar}>
                    <div className={styles['inner-circle']}>
                        <p className={styles.text}>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;