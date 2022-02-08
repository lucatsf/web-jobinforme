import styles from './styles.module.scss';

export default function SearchJob() {
    return (
        <div className={styles.searchWrapper} >
            <input className={styles.searcJobInput} type='text' placeholder='Pesquisar vagas' />
        </div>
    )
}