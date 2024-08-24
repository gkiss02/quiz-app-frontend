import BlueButton from '../../UI/BlueButton';
import ButtonContainer from '../../UI/ButtonContainer';
import Modal from '../../UI/Modal';
import RedButton from '../../UI/RedButton';
import styles from './DeleteModal.module.css';
import { getAuthToken } from '../../util/auth';
import { useSubmit } from 'react-router-dom';
import { useContext } from 'react';
import { ErrorCTX, SuccessCTX } from '../../Context/Context';

const DeleteModal: React.FC <({closeModal: () => void})> = (props) => {
    const submit = useSubmit();
    const errorToasterState = useContext(ErrorCTX);
    const successToasterState = useContext(SuccessCTX);
    
    async function deleteProfile () {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/delete-me`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })

            if (!response.ok) {
                throw new Error('Something went wrong');
            }   
            
            successToasterState.setSuccess(true);
            successToasterState.setMessage('Profile deleted successfully');
            submit(null, { action: '/logout', method: 'post' });
        } catch (error) {
            errorToasterState.setError(true);
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