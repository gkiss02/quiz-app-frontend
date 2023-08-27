import styles from './Button.module.css';

const BlueButton: React.FC <({children: React.ReactNode, onClick: () => void})> = (props) => {
    return (
        <button className={`${styles.button} ${styles['blue-button']}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default BlueButton;