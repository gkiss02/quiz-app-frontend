import styles from './Button.module.css';

const RedButton: React.FC <({children: React.ReactNode, onClick: () => void})> = (props) => {
    return (
        <button className={`${styles.button} ${styles['red-button']}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default RedButton;