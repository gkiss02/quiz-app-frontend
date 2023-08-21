import styles from './Timer.module.css';

function Timer () {
    return ( 
        <div className={styles.container}>
            <div className={styles['circle-container']}>
                <div className={styles.bar}>
                    <div className={styles['inner-circle']}>
                        <p className={styles.text}>30</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;