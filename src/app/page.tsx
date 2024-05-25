import { Advertising } from '@/components/Advertising'
import styles from './page.module.css'
import Image from 'next/image'
import { api } from '@/services/api'
import { IArticle } from '@/interfaces'

export const getData = async () => {
  try {
    const { data } = await api.get('/articles/main')

    return data.articles as IArticle[]
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const data = await getData()
  const mainArticle = data[0]

  return (
    <main className={`${styles.container} container`}>
      <Advertising />
      <section className={styles.mainArticles}>
        <article key={mainArticle.id} className={`${styles.mainNews} h1`}>
          <p className="category economy">{mainArticle.category}</p>
          <h1>{mainArticle.title}</h1>
        </article>
        <div className={styles.boxSecondaryArticle}>
          {data.map((article, index) => {
            if (index === 0) {
              return <></>
            }

            return (
              <>
                <article
                  key={article.id}
                  className={`${styles.secondaryArticle} h${index + 1}`}
                >
                  <Image
                    src={article.img!}
                    alt=""
                    width={280}
                    height={190}
                    className={styles.imgArticles}
                  />
                  <p className="category education">{article.category}</p>
                  <h2>{article.title}</h2>
                </article>
              </>
            )
          })}
        </div>
      </section>

      <section className={styles.boxThirArticle}>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
      </section>
    </main>
  )
}
