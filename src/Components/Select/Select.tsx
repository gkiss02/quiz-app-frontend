import styles from './Select.module.css';

const Select: React.FC<({name: string, arr: string[], setter: (element: string) => void})> = (props) => {
    function changeHandler (event: React.ChangeEvent<HTMLSelectElement>) {
        props.setter(event.target.value);
    }
    
    return (
        <div className={styles.container}>
            <label>{props.name}</label>
            <select className={styles.select} onChange={changeHandler}>
                {props.arr.map((item, index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select