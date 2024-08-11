import BlueButton from "../../UI/BlueButton";
import ButtonContainer from "../../UI/ButtonContainer";
import Modal from "../../UI/Modal";
import RedButton from "../../UI/RedButton";
import styles from './DeleteModal.module.css';
import { getAuthToken } from "../../Util/auth";
import { useNavigate } from "react-router-dom";

const DeleteModal: React.FC <({closeModal: () => void})> = (props) => {
    const navigate = useNavigate();

    async function deleteProfile () {
        const response = await fetch('http://localhost:8080/users/deleteMe', {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + getAuthToken()
            }
        })
        
        if (response.ok) {
            localStorage.removeItem('authToken');
            navigate('/');
        }
    }

    return (
        <Modal closeModal={props.closeModal}>
            <h2 className={styles.header}>Are you sure you want to delete your profile?</h2>
            <p className={styles.text}>This action cannot be undone.</p>
            <ButtonContainer>
                <RedButton onClick={deleteProfile}>Yes</RedButton>
                <BlueButton onClick={props.closeModal}>No</BlueButton>
            </ButtonContainer>
        </Modal>
    )
}

export default DeleteModal;