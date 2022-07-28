import styles from "./Header.module.css";

import Logo from './../img/logo.svg';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="Logotipo" />
        </div>
    )
}