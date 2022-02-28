import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import navStyles from '../../styles/navbar.module.css'
import Modal from '../elements/Modal';
import ModalContext from '../context/ModalContext'

export default function FullPage({ children, pageProps, hasHeader=false, hasModal=false, propsModal={} }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren && !hasModal) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
  <>
    {hasHeader &&
      <nav className={navStyles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contacts">Contact</a></li>
        </ul>
      </nav>
    }
    <div className={styles.container}>
      <Head>
        <title>{pageProps.meta.title}</title>
        <meta name="description" content={pageProps.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalContext.Provider value={{...propsModal}}>
        <main
          className={`${styles.main} ${styles[transitionStage]}`}
        >
          {children}
        </main>

        {hasModal && (
          <Modal />
        )}
      </ModalContext.Provider>
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
  </>
  )
}
