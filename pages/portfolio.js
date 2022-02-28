import { useState, useEffect } from 'react';
import FullPage from '../components/layouts/FullPage'
import TextLimited from '../components/elements/TextLimited'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig ? getConfig() : {};

const modalContent = (post) => ({
  header:  <h1>{post.Title}</h1>,
  body:  <p>{post.Summary}</p>,
  footer:  <a href={post.Url}><h3 style={{textAlign: "right"}}>Access this site here &rarr;</h3></a>
})

const Item = ({ post, key, onClickFunc }) => (
  <div className={styles.card} key={key} onClick={onClickFunc}>
    <h2>{post.Title}</h2>
    <TextLimited text={post.Summary}/>
  </div>
)

function Portfolio({ posts=[] }) {
  const [isShown, setIsShown] = useState(false);
  const [selectPost, setSelectPost] = useState({})
  const showModal = (post) => {
    setIsShown(true);
    setSelectPost(post)
  };

  const closeModal = () => {
    setIsShown(false);
  };

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const propsModal = {
    content: modalContent(selectPost), isShow: isShown, closeModal
  }
  const meta = {
    title: "Portfolio",
    description: "See all my jobs in past, present and future (?)."
  }
  return (
    <FullPage pageProps={{meta}} hasHeader hasModal propsModal={{...propsModal}}>
      <h1 className={styles.title}>
        PORTFOLIO
      </h1>

      <p className={styles.description}>
        Some jobs maybe was no employer link because <br></br>
        are door closed or was not a website (don't ask me why)
      </p>

      <div className={styles.grid}>
        {posts.map((post, index) => Item({ post, key: index, onClickFunc: () => { showModal(post)} }))}
      </div>
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