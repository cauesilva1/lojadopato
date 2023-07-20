
import styles from './header.module.css'
import { SlUser } from "react-icons/sl";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.logo}>
            <h2>loja do pato</h2>
        </div>

        <div className={styles.icon}>
        <Link href="/login" className={styles.login}>
              <SlUser className={styles.estiloLogo}/>
        </Link>
        </div>

    </header>
  )
}