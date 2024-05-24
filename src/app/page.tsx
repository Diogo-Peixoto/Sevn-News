import { Advertising } from '@/components/Advertising'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`${styles.container} container`}>
      <Advertising />
      <section className={styles.mainArticles}>
        <article className={styles.mainNews}>
          <p className="category economy">ECONOMIA</p>
          <h1>
            Quem não tiver valores a receber nesta etapa poderá ter nas próximas
            fases, diz BC
          </h1>
        </article>
        <div className={styles.boxSecondaryArticle}>
          <article className={styles.secondaryArticle}>
            <Image
              src="/figure.png"
              alt="educação"
              width={280}
              height={190}
              className={styles.imgArticles}
            />
            <p className="category education">EDUCAÇÃO</p>
            <h2>
              Datafolha: Após ensino remoto, 76% precisam de reforço na
              alfabetização
            </h2>
          </article>
          <article className={styles.secondaryArticle}>
            <Image
              src="/figure.png"
              alt="educação"
              width={280}
              height={190}
              className={styles.imgArticles}
            />
            <p className="category education">EDUCAÇÃO</p>
            <h2>
              Datafolha: Após ensino remoto, 76% precisam de reforço na
              alfabetização
            </h2>
          </article>
        </div>
      </section>

      <section className={styles.boxThirArticle}>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
        <article className={styles.thirdArticle}>
          <div className={styles.vector} />
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </article>
      </section>
    </main>
  )
}
