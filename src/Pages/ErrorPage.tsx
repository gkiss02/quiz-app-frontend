import styles from './ErrorPage.module.css'

function ErrorPage () {
    const sadIcon = require('../Images/sadness.png');

    return (
        <div className={styles.container}>
            <h1>Error 404</h1>
            <p>Something went wrong</p>
            <img src={sadIcon} className={styles.icon}></img>
        </div>
    )
}

export default ErrorPage;