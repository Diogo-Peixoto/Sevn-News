/* eslint-disable react/no-unescaped-entities */
import { redirect } from 'next/navigation'

import { api } from '@/services/api'
import { IArticle } from '@/interfaces'
import { Advertising } from '@/components/Advertising'

import styles from './styles.module.css'
import { Metadata } from 'next'

interface IParamsProps {
  params: { id: string }
}

export const getSpecificArticle = async (id: string) => {
  try {
    const { data } = await api.get(`/articles/${id}`)

    return data as IArticle
  } catch (err) {
    console.error(err)
    redirect('/')
  }
}

export const generateMetadata = async ({
  params,
}: IParamsProps): Promise<Metadata> => {
  const article = await getSpecificArticle(params.id)

  return {
    title: article.title,
    description: article.description_seo,
  }
}

const ArticlePage = async ({ params }: IParamsProps) => {
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
