import styles from './ErrorPage.module.css'

function ErrorPage () {
    const sadIcon = require('../Images/sadness.png');

    return (
        <div className={styles.container}>
            <h1>Something went wrong</h1>
            <img src={sadIcon} className={styles.icon}></img>
        </div>
    )
}

export default ErrorPage;