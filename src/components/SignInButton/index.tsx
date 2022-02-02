import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {
    const userLogged = true;
    return userLogged ? (
        <button type="button" className={styles.signInButton}>
            <FaGoogle color="#fff" />
            Lucas Torres
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGoogle color="#fff" />
            Login com Google
        </button>
    )
}