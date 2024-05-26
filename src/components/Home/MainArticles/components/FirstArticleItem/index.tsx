import Link from 'next/link'

import { IArticle } from '@/interfaces'

import styles from './styles.module.css'

interface IFirstArticleItemProps {
  firstArticle: IArticle
}

export const FirstArticleItem = ({ firstArticle }: IFirstArticleItemProps) => {
  return (
    <Link href={`/article/${firstArticle.id}`}>
      <article key={firstArticle.id} className={`${styles.mainNews} h1`}>
        <p className="category economy">{firstArticle.category}</p>
        <h1>{firstArticle.title}</h1>
      </article>
    </Link>
  )
}
