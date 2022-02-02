import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="job in for me"/>

                <nav>
                    <a>Home</a>
                    <a>Vagas</a>
                </nav>
            </div>
        </header>
    )
}