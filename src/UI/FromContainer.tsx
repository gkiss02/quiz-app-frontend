import styles from './FormContainer.module.css'

const FormContainer: React.FC<({children: React.ReactNode})> = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default FormContainer;