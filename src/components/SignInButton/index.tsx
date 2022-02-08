import { useContext, useEffect } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { AuthContext } from '../../context/auth'
import styles from './styles.module.scss'



export function SignInButton() {
    
    const { user, signInUrl, signOut } = useContext(AuthContext)

    function redirect() {
        window.location.href = signInUrl
    }

    return user ? (
        <button type="button" onClick={signOut} className={styles.signInButton}>
            <img src={ user.picture_url } />
            { user.name }
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" onClick={redirect} className={styles.signInButton}>
            <FaGoogle color="#fff" />
            Login com Google
        </button>
    )
}