import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function FullPage({ children, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageProps.meta.title}</title>
        <meta name="description" content={pageProps.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kreyzon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Cleisson Vieira
        </a>
      </footer>
    </div>
  )
}
