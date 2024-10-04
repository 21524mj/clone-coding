import Class_menu from "./Class_menu/Class_menu";
import styles from "./Main_container.module.css";
import Search from "./Searching/Searching";

export default function Main_container() {
  return (
    <div className={styles.main_container}>
      <Search></Search>
      <Class_menu></Class_menu>
    </div>
  );
}
