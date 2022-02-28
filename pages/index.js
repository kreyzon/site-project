import Link from 'next/link'
import FullPage from '../components/layouts/FullPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  const meta = {
    title: "Home",
    description: "Robots are welcome in this site"
  }
  return (
    <FullPage pageProps={{meta}}>
      <>
        <h1 className={styles.title}>
          Welcome to <a href="https://kreyzon.github.io">Kreyzon Site!</a>
        </h1>

        <p className={styles.description}>
          You will find all works developed by me in some team in my whole dev life <br></br>
          and often some blog content about technologies or random stuffs 😎
        </p>

        <div className={styles.grid+" "+styles.max}>
          <Link href="/portfolio">
            <a className={styles.card}>
              <h2>Portfolio &rarr;</h2>
              <p>See all my jobs in past, present and future (?).</p>
            </a>
          </Link>
          <Link href="/blog" >
            <a className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>All my thoughts and studies are here!</p>
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.card}>
              <h2>About Me &rarr;</h2>
              <p>Some personal information and contacts in case your want talk with me</p>
            </a>
          </Link>

          <a
            href="https://github.com/kreyzon"
            className={styles.card}
          >
            <h2>My Code &rarr;</h2>
            <p>
              Follow me in GitHub, but almost has more is in GitLab
            </p>
          </a>
        </div>
      </>
    </FullPage>
  )
}
