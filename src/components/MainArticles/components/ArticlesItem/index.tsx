import Image from 'next/image'
import Link from 'next/link'

import { IArticle } from '@/interfaces'

import styles from './styles.module.css'

interface IArticlesItemProps {
  article: IArticle
  index: number
}

export const ArticlesItem = ({ article, index }: IArticlesItemProps) => {
  return (
    <Link href={`/article/${article.id}`}>
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
}
