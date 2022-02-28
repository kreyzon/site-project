import FullPage from '../components/layouts/FullPage'
import styles from '../styles/Home.module.css'

export default function Contact() {
  const meta = {
    title: "Contact",
    description: "Some personal information and contacts in case your want talk with me"
  }
  return (
    <FullPage pageProps={{meta}} hasHeader>
      <h1 className={styles.title}>
        ABOUT ME
      </h1>
      <div className={styles.description_indent}>
        <p>I was born in Teresina/Brazil, married with Ana Carla 👱🏻‍♀️ and a pet father of Yuno and Shake 😻, psychedelic rock appreciatior and often listening lo-fi or trap remix beats (but sometimes I catch me listen reggae and traditional northeast forro), I like to watch terror/horror movies on weekends and to follow various kinds of animes series in lunch or dinner time, I like drink coffee on the morning and beer on the end of day, and since the start of pandemic I changed my diet for vegetarian food 🌿.</p>
        <p>In my academic road, I graduated in Systems Analysis and Development (IFPI), MSc in Applied Computing (UNIFOR) and dreaming of a doctorate in Portugal. More detailed information can be found on <a href='/docs/CleissonVieira.pdf'>my CV</a>.</p>
        <p>I am someone who loves the dev life ❤️, who is not afraid of clients and users demand and always disposes to help other. I want live in Portugal and only with my actual job is a harden process, so I searching a job opportunity with visa support to there.</p>
        <p>Here some technologies that I has knowledge:
          <ul className={styles.ul_justifed}>
            <li>☕  Java (JSF, Hibernate, Springboot)</li>
            <li>📜 NodeJS (ReactJS, Express, Mongoose, Grunt)</li>
            <li>🐍 Python (Flask, Django)</li>
            <li>🗄️ Databases (Postgres, MongoDB, Redis, SQLite)</li>
            <li>🌐 HTML,CSS,JS</li>
            <li>⚙️ Devops (GitLab CI, Docker, Kubernetes, Google Cloud Plataform)</li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <h1 className={styles.title}>
        CONTACT
      </h1>
      <p className={styles.description}>
        <span>There many ways to communicate with me, some more frequently than others.</span>
        <h4>Email's:</h4>
        <ul className={styles.ul_justifed}>
          <li><a href='mail_to:cleissonvb@gmail.com'>cleissonvb@gmail.com</a> > it is my main email, also can call me on Hangouts</li>
          <li><a href='mail_to:ryusei-kenragna@hotmail.com'>ryusei-kenragna@hotmail.com</a> > this is my account from the late MSN, but still working and is accessed to check some offers and promotions.</li>
          <li><a href='mail_to:kreyzon@outlook.com'>kreyzon@outlook.com</a> > a new Outlook email for migrate some contacts on email above</li>
        </ul>
        <h4>Social Medias:</h4>
        <ul className={styles.ul_justifed}>
          <li><a href='http://www.facebook.com/cleissonvb'>Facebook</a> > for personal contact and if you want to be my friend</li>
          <li><a href='http://www.twitter.com/kreyzon'>Twitter</a> > @kreyzon for mentions</li>
          <li><a href='https://www.linkedin.com/in/cleisson-vieira-054a9268'>LinkedIn</a> > for professional profile</li>
          <li><a href='https://www.researchgate.net/profile/Cleisson_Barbosa'>ResearchGate</a> > for researcher profile</li>
        </ul>
      </p>
    </FullPage>
  )
}
