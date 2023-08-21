import styles from './FilledBar.module.css';

const FilledBar: React.FC<({numberOfQuestions: number, actual: number})> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <div className={styles['filled-line']} style={{width: `${(props.actual / props.numberOfQuestions) * 100}%`}}></div>
            </div>
            <p>{`${props.actual}/${props.numberOfQuestions}`}</p>
        </div>
    )
}

export default FilledBar;