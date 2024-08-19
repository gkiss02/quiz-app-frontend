import styles from './QuitModal.module.css';
import Modal from '../../UI/Modal';
import BlueButton from '../../UI/BlueButton';
import RedButton from '../../UI/RedButton';
import ButtonContainer from '../../UI/ButtonContainer';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TimeCTX } from '../../Context/Context';

const QuitModal:React.FC <({closeModal: () => void})> = (props) => {
    const navigate = useNavigate();
    const timeCTX = useContext(TimeCTX);

    function backHandler () {
        navigate('/');
        timeCTX.setTime(30);
    }

    return (
        <Modal closeModal={props.closeModal}>
            <h2 className={styles.header}>Are you sure you want to quit?</h2>
            <p className={styles.text}>All of your scores that you earned this round will be lost!</p>
            <ButtonContainer>
                <RedButton onClick={backHandler}>Yes</RedButton>
                <BlueButton onClick={props.closeModal}>No</BlueButton>
            </ButtonContainer>
        </Modal>
    )
}

export default QuitModal;