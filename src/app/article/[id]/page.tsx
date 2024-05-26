/* eslint-disable react/no-unescaped-entities */
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { api } from '@/services/api'
import { IArticle } from '@/interfaces'

import { PlainText } from './components/PlainText'
import { Advertising } from '@/components/Advertising'
import { InfoArticle } from './components/InfoArticle'
import { HeaderArticle } from './components/HeaderArticle'

import styles from './styles.module.css'

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
      <HeaderArticle
        title={dataSpecificArticle.title}
        category={dataSpecificArticle.category}
      />

      <PlainText text={dataSpecificArticle.text[0]} />

      <InfoArticle
        pubDate={dataSpecificArticle.pub_date}
        author={dataSpecificArticle.author}
      />

      <Advertising />

      {dataSpecificArticle.text.map((text) => {
        return <PlainText key={Math.random()} text={text} />
      })}
    </main>
  )
}

export default ArticlePage
