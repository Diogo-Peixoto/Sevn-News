import styles from './styles.module.css'

interface IHeaderArticleProps {
  title: string
  category: string
}

export const HeaderArticle = ({ title, category }: IHeaderArticleProps) => {
  return (
    <header>
      <p className="category economy">{category}</p>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
