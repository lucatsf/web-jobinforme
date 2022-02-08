import Head from "next/head";
import { useContext } from "react";
import { ListJobs } from "../../components/ListJobs";
import SearchJob from "../../components/SearchJob";
import { SendJob } from "../../components/SendJob";
import { AuthContext } from "../../context/auth";
import styles from "./styles.module.scss";


export default function Jobs() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>JobInForMe | Vagas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.contentContainer}>
          <SearchJob />

          <ListJobs />
          { !!user ? <SendJob /> : null }
        </main>
    </>
  )
}