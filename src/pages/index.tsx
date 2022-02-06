import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>JobInForMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Encontre o emprego dos seus sonhos</span>
          <h1>Encontre sua vaga em uma empresa ideal para <span>Você!</span></h1>
          <p>
            Faça o login ou crie sua conta<br />
            <span>para encontrar o emprego dos seus sonhos.</span>
          </p>
        </section>

        <img
          src="/images/imageBanner.svg"
          alt="Woman looking for a job in front of an information board"
        />
      </main>
    </>
  )
}
