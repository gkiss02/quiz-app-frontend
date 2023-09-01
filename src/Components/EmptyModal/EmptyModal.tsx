import BlueButton from "../../UI/BlueButton";
import ButtonContainer from "../../UI/ButtonContainer";
import Modal from "../../UI/Modal";
import styles from "./EmptyModal.module.css";

const EmptyModal: React.FC<({closeModal: () => void})> = (props) => {
    return (
        <Modal closeModal={props.closeModal}>
            <h2 className={styles.text}>Please select an answer!</h2>
            <ButtonContainer>
                <BlueButton onClick={props.closeModal}>OK</BlueButton> 
            </ButtonContainer>
        </Modal>
    );
}

export default EmptyModal;