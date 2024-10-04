import styles from "./Menu.module.css";
import logo from "./logo.svg";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menubar}>
        <div className={styles.left_container}>
          <a className={styles.logo}>
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <input type="search" className={styles.input}></input>
        </div>
        <div className={styles.right_container}>
          <a className={styles.menu}>수업 탐색</a>
          <a className={styles.menu}>커뮤니티</a>
          <a className={styles.menu}>수강 후기</a>
          <button>멤버쉽 안내</button>
          <a className={styles.menu}>로그인/회원가입</a>
        </div>
      </div>
    </div>
  );
}
