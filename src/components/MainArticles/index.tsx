import { IArticle } from '@/interfaces'
import { ArticlesItem } from './components/ArticlesItem'
import { FirstArticleItem } from './components/FirstArticleItem'

import styles from './styles.module.css'

interface IMainArticlesProps {
  dataMainArticles: IArticle[]
}

export const MainArticles = ({ dataMainArticles }: IMainArticlesProps) => {
  const firstArticle = dataMainArticles[0]

  // Removing the first object from the array to prevent it from being rendered
  // Preventing an error to ensure the array is not empty
  if (dataMainArticles.length > 1) {
    dataMainArticles.shift()
  }

  return (
    <section className={styles.mainArticles}>
      <FirstArticleItem firstArticle={firstArticle} />

      <div className={styles.boxSecondaryArticle}>
        {dataMainArticles.map((article, index) => {
          return (
            <ArticlesItem key={article.id} article={article} index={index} />
          )
        })}
      </div>
    </section>
  )
}
