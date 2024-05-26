import styles from './styles.module.css'

interface IInfoArticleProps {
  pubDate: string
  author: string
}

export const InfoArticle = ({ pubDate, author }: IInfoArticleProps) => {
  return (
    <span className={styles.articleInformation}>
      {pubDate}, Por: {author}
    </span>
  )
}
