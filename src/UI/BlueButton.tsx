import styles from './Button.module.css';

const BlueButton: React.FC <({children: React.ReactNode, onClick: () => void, isBig?: boolean})> = (props) => {
    return (
        <button className={`${styles.button} ${styles['blue-button']} ${props.isBig && styles.big}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default BlueButton;