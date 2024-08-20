import styles from './Main.module.css'
import CategoryCard from '../Components/CategoryCard/CategoryCard';
import ResultCard from '../Components/ResultCard/ResultCard';
import Modal from '../Components/StartModal/StartModal';
import ProfileMenu from '../Components/ProfileMenu/ProfileMenu'
import { useState, useContext, useEffect } from 'react';
import { QuestionsCTX } from '../Context/Context';
import { getAuthToken } from '../Util/auth';
import { User } from '../Types/User';
import { useNavigate } from 'react-router-dom';
import Loader from '../UI/Loader';

function Main () {
    const [visible, setVisible] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [id, setId] = useState('0');
    const [user, setUser] = useState<User>();
    const setNotEnough = useContext(QuestionsCTX).setNotEnough;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

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
            setLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/me`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + getAuthToken()
                    }
                })

                const data = await response.json();
                setUser(data);
            } catch (error) {
                navigate('/error-page');
            } finally {
                setLoading(false);
            }
        }())
    }, []);

    if (loading) {
        return <Loader />
    }
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h2>Hi, {user?.name}</h2>
                    <p className={styles['welcome-text']}>Let's make this day productive</p>
                </div>
                <div className={styles['profile-container']}>
                    {profileMenu && <ProfileMenu />}
                    <img src={user?.profilePicture} className={styles['profile-picture']} onClick={profileMenuHandler} />
                </div>
            </header>
            <ResultCard />
            <div>
                <h3>Let's play</h3>
                <div className={styles['category-container']}>
                    <CategoryCard id={'21'} src='https://i.ibb.co/ctLdW03/004-basketball.png' name={'Sports'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'23'} src='https://i.ibb.co/4JcgXFD/005-parchment.png' name={'History'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'11'} src='https://i.ibb.co/b7HdQkh/006-film-slate.png' name={'Movies'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'22'} src='https://i.ibb.co/HzRMY0y/007-globe.png' name={'Geography'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'26'} src='https://i.ibb.co/Qbn2mG9/008-fame.png' name={'Celebrities'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'20'} src='https://i.ibb.co/cTsvDmL/009-trident.png' name={'Mythology'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'24'} src='https://i.ibb.co/FBTZW2F/010-democracy.png' name={'Politics'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'10'} src='https://i.ibb.co/c3SjfSn/book.png' name={'Books'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'17'} src='https://i.ibb.co/dW9v5qz/science.png' name={'Science'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'12'} src='https://i.ibb.co/WkJb7kV/001-musical-notes.png' name={'Music'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'27'} src='https://i.ibb.co/T1NbCVM/002-giraffe.png' name={'Animals'} showModal={showModal} setId={setId} />
                    <CategoryCard id={'19'} src='https://i.ibb.co/dcF88rX/003-calculator.png' name={'Math'} showModal={showModal} setId={setId} />
                </div>
            </div>
            {visible && <Modal closeModal={closeModal} id={id} />}
        </div>
    )}

export default Main
