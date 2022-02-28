import Image from 'next/image'
import FullPage from '../components/layouts/FullPage'
import styles from '../styles/Home.module.css'
import customLoader from '../utils/customLoader'

export default function Contact() {
  const meta = {
    title: "Blog",
    description: "All my thoughts and studies are here!"
  }
  return (
    <FullPage pageProps={{meta}} hasHeader>
      <h1 className={styles.title}>
        BLOG
      </h1>
      <div className={styles.description}>
      <Image src="/wip.png" alt='Work In Progress' width="320px" height="280px" loader={customLoader}></Image>
      </div>
    </FullPage>
  )
}
