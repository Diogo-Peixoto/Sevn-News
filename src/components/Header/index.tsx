'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { usePathname, useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  const isPreviousPage = usePathname().includes('article')

  return (
    <header className={styles.header}>
      {isPreviousPage && (
        <button
          className={styles.buttonPreviousPage}
          onClick={() => router.back()}
        >
          <Image
            src="/header/arrow-left.svg"
            alt="Return to the previous page"
            width={24}
            height={24}
          />
        </button>
      )}
      SEVN NEWS
    </header>
  )
}
