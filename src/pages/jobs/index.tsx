import Head from "next/head";
import { ListJobs } from "../../components/ListJobs";
import styles from "./styles.module.scss";


export default function Jobs() {
  return (
    <>
      <Head>
        <title>JobInForMe | Vagas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.contentContainer}>
            <ListJobs />
        </main>
    </>
  )
}