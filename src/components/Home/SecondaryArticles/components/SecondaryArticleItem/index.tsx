import Link from 'next/link'
import styles from './styles.module.css'
import { IArticle } from '@/interfaces'

interface ISecondaryArticlesItemProps {
  article: IArticle
}

export const SecondaryArticlesItem = ({
  article,
}: ISecondaryArticlesItemProps) => {
  return (
    <Link key={article.id} href={`/article/${article.id}`}>
      <article className={styles.secondaryArticle}>
        <div
          className={`${styles.vector} ${article.category === 'ECONOMIA' ? styles.vectorRed : article.category === 'EDUCAÇÃO' ? styles.vectorBlue : styles.vectorGreen}`}
        />
        {article.title}
      </article>
    </Link>
  )
}
