import FullPage from '../components/FullPage'
import styles from '../styles/Home.module.css'

const Item = ({ post }) => (
  <a href={post.Url} className={styles.card}>
    <h2>{post.Title}</h2>
    <p>{post.Summary}</p>
  </a>
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
          {posts.map((post) => Item({ post }))}
        </div>
      </>
    </FullPage>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:8080/v1/portfolio')
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