import { Advertising } from '@/components/Advertising'
import styles from './page.module.css'
import Image from 'next/image'
import { api } from '@/services/api'
import { IArticle } from '@/interfaces'

interface IGetArticlesProps {
  route: 'main' | 'secondary'
}

export const getArticles = async ({ route }: IGetArticlesProps) => {
  try {
    const { data } = await api.get(`/articles/${route}`)

    return data.articles as IArticle[]
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const dataMainArticles = await getArticles({ route: 'main' })
  const mainArticle = dataMainArticles[0]

  const dataSecondaryArticles = await getArticles({ route: 'secondary' })

  return (
    <main className={`${styles.container} container`}>
      <Advertising />
      <section className={styles.mainArticles}>
        <article key={mainArticle.id} className={`${styles.mainNews} h1`}>
          <p className="category economy">{mainArticle.category}</p>
          <h1>{mainArticle.title}</h1>
        </article>
        <div className={styles.boxSecondaryArticle}>
          {dataMainArticles.map((article, index) => {
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
        {dataSecondaryArticles.map((article) => {
          return (
            <article key={article.id} className={styles.thirdArticle}>
              <div
                className={`${styles.vector} ${article.category === 'ECONOMIA' ? styles.vectorRed : article.category === 'EDUCAÇÃO' ? styles.vectorBlue : styles.vectorGreen}`}
              />
              {article.title}
            </article>
          )
        })}
      </section>
    </main>
  )
}
