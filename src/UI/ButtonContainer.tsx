import styles from './ButtonContainer.module.css';

const ButtonContainer: React.FC<({children: React.ReactNode})> = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}

export default ButtonContainer;