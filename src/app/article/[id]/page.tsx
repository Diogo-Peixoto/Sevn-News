/* eslint-disable react/no-unescaped-entities */
import { Advertising } from '@/components/Advertising'
import styles from './styles.module.css'
import { api } from '@/services/api'
import { IArticle } from '@/interfaces'

export const getSpecificArticle = async (id: string) => {
  try {
    const { data } = await api.get(`/articles/${id}`)

    return data as IArticle
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch data')
  }
}

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const dataSpecificArticle = await getSpecificArticle(params.id)

  return (
    <main className={`${styles.container} container`}>
      <header>
        <p className="category economy">{dataSpecificArticle.category}</p>
        <h1 className={styles.title}>{dataSpecificArticle.title}</h1>
      </header>

      <p className={styles.text}>{dataSpecificArticle.text[0]}</p>

      <span className={styles.articleInformation}>
        {dataSpecificArticle.pub_date}, Por: {dataSpecificArticle.author}
      </span>

      <Advertising />
      {dataSpecificArticle.text.map((text) => {
        return (
          <p key={Math.random()} className={styles.text}>
            {text}
          </p>
        )
      })}
    </main>
  )
}

export default ArticlePage
