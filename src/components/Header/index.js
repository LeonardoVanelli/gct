import styles from './Header.module.css'
import Image from 'next/image'

import Link from 'next/link'
import Logo from '../../../public/images/logo-500X250.png'

export default function Header() {
  return (
    <header>
        <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image src={Logo} alt="logo" height={80} width={166}/>
                </Link>
              </div>
              <div className={styles.buttons}>
                <Link href="#">
                  <div>
                    <a className={styles.item}>Sobre nós</a>
                  </div>
                </Link>
                <Link href="/consult">
                  <div>
                    <a className={styles.item}>Consulte</a>
                  </div>
                </Link>
                <Link href="#">
                  <div>
                    <a className={styles.item}>Ranking</a>
                  </div>
                </Link>
                <Link href="#">
                  <div>
                    <a className={styles.item}>Parceiros</a>
                  </div>
                </Link>
              </div>
            </div>
        </div>
    </header>
  )
}
