import MainPage from './_components/MainPage'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <MainPage />
      </div>
    </main>
  )
}
