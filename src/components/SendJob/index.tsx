import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../context/auth';
import styles from './styles.module.scss'

export function SendJob() {
    const { user } = useContext(AuthContext);
    return (
        <div className={styles.sendJobFormWrapper}>
            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.picture_url} alt={user?.name}/>
                </div>

                <strong className={styles.userName}>
                    {user?.name}
                </strong>
                <span className={styles.userGoogle}>
                    <FaGoogle size="16"/>
                    {user?.email}
                </span>
            </header>
        </div>
    )
}