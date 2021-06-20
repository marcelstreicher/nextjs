import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BORA PRA BC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/boraprabc.png" alt="BORA PRA BC" className={styles.logo} />

        <div className={styles.grid}>
          <a href="https://www.youtube.com/channel/UC4hv5oGOGyzTGoUZlWvJDPw" className={styles.card}>
            <h3>Canal no Youtube &rarr;</h3>
            <p>O material mais completo você encontrará no nosso canal do Youtube</p>
          </a>

          <a href="https://instagram.com/boraprabc" className={styles.card}>
            <h3>Instagram &rarr;</h3>
            <p>Promoções, dicas, fotos e vídeos exclusivos!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/boraprabc.png" alt="BORA PRA BC" className={styles.logofooter} />
        </a>
      </footer>
    </div>
  )
}
