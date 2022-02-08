import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a href='/'>
                    <img src="/images/logo.svg" alt="job in for me"/>
                </a>

                <nav>
                    <a href='/' className={styles.active}>Home</a>
                    <a href='/jobs'>Vagas</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}