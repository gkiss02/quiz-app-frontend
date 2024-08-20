import { CircularProgress } from "@mui/material";
import styles from './Loader.module.css';

function Loader () {
  return (
    <div className={styles.container}>
        <CircularProgress 
          size={100}
          sx={{color: '#3eb8d4'}}
        />
    </div>
  )
}

export default Loader;