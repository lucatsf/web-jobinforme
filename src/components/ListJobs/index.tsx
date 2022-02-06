import styles from './styles.module.scss'

export function ListJobs() {
    return (
        <div className={styles.listJobs}>
        <h1>Vaga para Desenvolvedor backend</h1>
        <span>Multiplier</span> <span>nota 5</span>
        <p>Desenvolver aplicações boas e bacanas</p>
        </div>
    )
}