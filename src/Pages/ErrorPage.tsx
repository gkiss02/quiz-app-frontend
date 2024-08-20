import styles from './ErrorPage.module.css'

function ErrorPage () {
    return (
        <div className={styles.container}>
            <h1>Something went wrong</h1>
            <img src="https://i.ibb.co/StF2C8B/sadness.png" className={styles.icon}/>
        </div>
    )
}

export default ErrorPage;