import styles from './styles.module.css'

interface IPlainTextProps {
  text: string
}

export const PlainText = ({ text }: IPlainTextProps) => {
  return <p className={styles.text}>{text}</p>
}
