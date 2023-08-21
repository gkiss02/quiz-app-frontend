import styles from './CategoryCard.module.css';

type CategoryCardProps = {
    id: string;
    src: any;
    name: string;
    showModal: () => void;
    setId: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    function clickHandler() {
        props.showModal();
        props.setId(props.id);
    }

    return (
        <div className={styles.container} onClick={clickHandler}>
            <img src={props.src} className={styles.icon}/>
            <p className={styles.name}>{props.name}</p>
        </div>
    );
}

export default CategoryCard;
