import styles from './Rank.module.css'

type RankProps = {
    result: number;
    name: string;
    score: string;
    src: string;
}

const Rank: React.FC<(RankProps)> = (props) =>  {
    return (
        <div className={styles.container}>
            <p className={styles.result}>{props.result}</p>
            <img src={props.src} className={styles.avatar}></img>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.score}>{props.score}</p>
        </div>
    )
}

export default Rank;