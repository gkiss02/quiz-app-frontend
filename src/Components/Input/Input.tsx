import { useRef } from 'react';
import styles from './Input.module.css'

type InputProps = {
    type: string,
    placeholder: string,
    isValid?: boolean,
    errorMessage?: string | undefined,
    setValue: (s: string | undefined) => void
}

const Input : React.FC<(InputProps)> = (props) => {
    let ref = useRef<HTMLInputElement>(null);

    function changeHandler () {
        props.setValue(ref.current?.value);
    }

    return (
        <div>
            <input 
                type={props.type} 
                className={`${styles.input} 
                ${props.isValid && styles['error-border']}`} 
                placeholder={props.placeholder} ref={ref} 
                onChange={changeHandler}
            />
            {props.isValid && <p className={styles['error-text']}>{props.errorMessage}</p>}
        </div>
    )
}

export default Input;