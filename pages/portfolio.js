import FullPage from '../components/layouts/FullPage'
import TextLimited from '../components/elements/TextLimited'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig ? getConfig() : {};

const Item = ({ post, key }) => (
  <div className={styles.card} key={key}>
    <h2>{post.Title}</h2>
    <TextLimited text={post.Summary}/>
  </div>
)
function Portfolio({ posts=[] }) {
  const meta = {
    title: "Portfolio",
    description: "See all my jobs in past, present and future (?)."
  }
  return (
    <FullPage pageProps={{meta}} hasHeader>
      <>
        <h1 className={styles.title}>
          PORTFOLIO
        </h1>

        <p className={styles.description}>
          Some jobs maybe was no employer link because <br></br>
          are door closed or was not a website (don't ask me why)
        </p>

        <div className={styles.grid}>
          {posts.map((post, index) => Item({ post, key: index }))}
        </div>
      </>
    </FullPage>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${publicRuntimeConfig.API_URL}/v1/portfolio`)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Portfolio