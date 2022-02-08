import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type Jobs = {
    id: string;
    user_id: string;
    title: string;
    content: string;
    like: number;
    updatedAt: string;
    user: {
        name: string;
        picture_url: string;
    }
}

export function ListJobs() {

    const [jobs, setJobs] = useState<Jobs[]>([])

    useEffect(() => {
        const token = localStorage.getItem('@jobinforme:token')

        if(token) {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
        }

        api.get('/post').then(response => {
            setJobs(response.data)
        })
    }, [])

    return (
        <>
            <div className={styles.listJobs}>
                <ul className={styles.orderList}>
                    {jobs.map(job => {
                        return (
                            <li className={styles.cardListJobs}>
                                <h1>{job.title}</h1>
                                <span className={styles.nameCompany}>Multiplier</span> <span>{job.like > 0 ? job.like : ''}</span>
                                <p className={styles.content}>{job.content}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>


    )
}