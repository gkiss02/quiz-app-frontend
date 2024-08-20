import { Snackbar } from "@mui/material";
import styles from './Toaster.module.css';

type ToasterProps = {
    header: string;
    message: string;
    backgroundColor: string;
    isOpen: boolean;
    handleClose: (event: React.SyntheticEvent | Event, reason?: any) => void
}

const Toaster: React.FC<ToasterProps>= (props) => {
    return (
        <Snackbar 
            open={props.isOpen} 
            sx={{ backgroundColor: props.backgroundColor }}
            className={styles.toaster}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={5000}
            onClose={props.handleClose}
        >
            <div className={styles.wrapper}>
                <h2>{props.header}</h2>
                <p>{props.message}</p>
            </div>
        </Snackbar>
    )
}

export default Toaster;