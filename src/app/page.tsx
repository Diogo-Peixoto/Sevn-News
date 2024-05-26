import Link from 'next/link'

import { api } from '@/services/api'
import { IArticle } from '@/interfaces'
import { Advertising } from '@/components/Advertising'

import styles from './page.module.css'
import { MainArticles } from '@/components/MainArticles'

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

  const dataSecondaryArticles = await getArticles({ route: 'secondary' })

  return (
    <main className={`${styles.container} container`}>
      <Advertising />
      <MainArticles dataMainArticles={dataMainArticles} />

      <section className={styles.boxThirArticle}>
        {dataSecondaryArticles.map((article) => {
          return (
            <Link key={article.id} href={`/article/${article.id}`}>
              <article className={styles.thirdArticle}>
                <div
                  className={`${styles.vector} ${article.category === 'ECONOMIA' ? styles.vectorRed : article.category === 'EDUCAÇÃO' ? styles.vectorBlue : styles.vectorGreen}`}
                />
                {article.title}
              </article>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
