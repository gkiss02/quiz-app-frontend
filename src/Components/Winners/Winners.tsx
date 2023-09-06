import styles from './Winners.module.css';

type WinnersProps = {
    src: string,
    result: string,
    name: string,
    score: string
}

const Winners: React.FC<(WinnersProps)> = (props) => {
    const isFirst = props.result === '1';
    const colors = ['#FFD000', '#3ED4A1', '#FF9F41'];
    const backgroundColor = colors[parseInt(props.result) - 1];

    return (
        <div className={`${styles.container} ${isFirst && styles['first-container']}`}>
            <div className={isFirst ? styles['icon-container-first'] : styles['icon-container']} style={{backgroundColor: backgroundColor}}>
                <img src={props.src} className={isFirst ? styles['icon-first'] : styles.icon}></img>
            </div>
            <p className={styles.result} style={{backgroundColor: backgroundColor}}>{props.result}</p>
            <div className={isFirst ? styles['text-container-first'] : styles['text-container']}>
                <p>{props.name}</p>
                <p>{props.score}</p>
            </div>
        </div>
    )
}

export default Winners;