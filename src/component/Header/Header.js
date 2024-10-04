import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a className={styles.menu1}>💼기업교육</a>
        <div className={styles.vertical_line}></div>
        <a className={styles.menu2}>⚡부트캠프</a>
      </div>
    </div>
  );
}
