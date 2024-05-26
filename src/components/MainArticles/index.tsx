import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { IArticle } from '@/interfaces'

interface IMainArticlesProps {
  dataMainArticles: IArticle[]
}

export const MainArticles = ({ dataMainArticles }: IMainArticlesProps) => {
  const mainArticle = dataMainArticles[0]

  return (
    <section className={styles.mainArticles}>
      <Link href={`/article/${mainArticle.id}`}>
        <article key={mainArticle.id} className={`${styles.mainNews} h1`}>
          <p className="category economy">{mainArticle.category}</p>
          <h1>{mainArticle.title}</h1>
        </article>
      </Link>
      <div className={styles.boxSecondaryArticle}>
        {dataMainArticles.map((article, index) => {
          if (index === 0) {
            return <></>
          }

          return (
            <Link key={article.id} href={`/article/${article.id}`}>
              <article className={`${styles.secondaryArticle} h${index + 1}`}>
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
            </Link>
          )
        })}
      </div>
    </section>
  )
}
