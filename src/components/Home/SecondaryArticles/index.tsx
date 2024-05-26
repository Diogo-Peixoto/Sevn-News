import { IArticle } from '@/interfaces'
import { SecondaryArticlesItem } from './components/SecondaryArticleItem'
import styles from './styles.module.css'

interface ISecondaryArticlesProps {
  dataSecondaryArticles: IArticle[]
}

export const SecondaryArticles = ({
  dataSecondaryArticles,
}: ISecondaryArticlesProps) => {
  return (
    <section className={styles.boxSecondaryArticle}>
      {dataSecondaryArticles.map((article) => {
        return <SecondaryArticlesItem article={article} key={article.id} />
      })}
    </section>
  )
}
