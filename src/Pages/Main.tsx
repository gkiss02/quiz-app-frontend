import styles from './Main.module.css'
import CategoryCard from '../Components/CategoryCard/CategoryCard';
import ResultCard from '../Components/ResultCard/ResultCard';
import Modal from '../Components/StartModal/StartModal';
import ProfileMenu from '../Components/ProfileMenu/ProfileMenu'
import { useState, useContext, useEffect } from 'react';
import { QuestionsCTX } from '../Context/Context';
import { getAuthToken } from '../Util/auth';
import { User } from '../Types/User';

function Main () {
    const [visible, setVisible] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [id, setId] = useState('0');
    const [user, setUser] = useState<User>();
    const setNotEnough = useContext(QuestionsCTX).setNotEnough;

    const musicIcon = require('../Images/001-musical-notes.png');
    const animalsIcon = require('../Images/002-giraffe.png');
    const mathIcon = require('../Images/003-calculator.png');
    const sportsIcon = require('../Images/004-basketball.png');
    const historyIcon = require('../Images/005-parchment.png');
    const movieIcon = require('../Images/006-film-slate.png');
    const geographyIcon = require('../Images/007-globe.png');
    const celebrityIcon = require('../Images/008-fame.png');
    const mythologyIcon = require('../Images/009-trident.png');
    const politicsIcon = require('../Images/010-democracy.png');
    const booksIcon = require('../Images/book.png');
    const scienceIcon = require('../Images/science.png');

    function showModal () {
        setVisible(true);
    }

    function closeModal () {    
        setVisible(false);
        setNotEnough(false);
    }

    function profileMenuHandler () {
        setProfileMenu(!profileMenu)
    }

    useEffect(() => {
        (async function () {
            const response = await fetch('http://localhost:8080/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken()
                }
            })

            const data = await response.json();
            setUser(data);
        }())
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h2>Hi, {user?.name}</h2>
                    <p className={styles['welcome-text']}>Let's make this day productive</p>
                </div>
                <div className={styles['profile-container']}>
                    {profileMenu && <ProfileMenu></ProfileMenu>}
                    <img src={user?.profilePicture} className={styles['profile-picture']} onClick={profileMenuHandler}></img>
                </div>
            </header>
            <ResultCard></ResultCard>
            <div>
                <h3>Let's play</h3>
                <div className={styles['category-container']}>
                    <CategoryCard id={'21'} src={sportsIcon} name={'Sports'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'23'} src={historyIcon} name={'History'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'11'} src={movieIcon} name={'Movies'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'22'} src={geographyIcon} name={'Geography'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'26'} src={celebrityIcon} name={'Celebrities'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'20'} src={mythologyIcon} name={'Mythology'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'24'} src={politicsIcon} name={'Politics'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'10'} src={booksIcon} name={'Books'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'17'} src={scienceIcon} name={'Science'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'12'} src={musicIcon} name={'Music'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'27'} src={animalsIcon} name={'Animals'} showModal={showModal} setId={setId}></CategoryCard>
                    <CategoryCard id={'19'} src={mathIcon} name={'Math'} showModal={showModal} setId={setId}></CategoryCard>
                </div>
            </div>
            {visible && <Modal closeModal={closeModal} id={id}></Modal>}
        </div>
    )}

export default Main
