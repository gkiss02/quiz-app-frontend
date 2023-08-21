import styles from './ResultComponent.module.css'

const ResultComponent: React.FC <({ src: any, title: string, number: number })> = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.src} className={styles.icon}></img>
            <div>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.number}>{props.number}</p>
            </div>
        </div>
    )
}

export default ResultComponent
