import styles from './Header.module.css'
import IgniteLogo from '../img/Ignite-Logo.svg'

export function Header(){
   return(
      <header className={styles.header}>
         <img src={IgniteLogo} alt="Logotipo do Ignite" />
      </header>
   );
}