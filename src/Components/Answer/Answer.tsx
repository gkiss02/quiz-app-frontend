import styles from './Answer.module.css'

const Answer: React.FC <({answer: string})> = (props) => {
    return (
        <div className={styles.container}>
            <p>{props.answer}</p>
            <div className={styles.circle}></div>
        </div>
    )
}

export default Answer