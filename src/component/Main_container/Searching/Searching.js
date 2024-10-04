import styles from "./Searching.module.css";

export default function Searching() {
  return (
    <div className={styles.container}>
      <div className={styles.question}>어떤 강의를 찾고 있나요?</div>
      <div className={styles.empty_box}></div>
      <div className={styles.search_menu}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.45005 8.74999C2.45005 5.27059 5.27065 2.44999 8.75005 2.44999C12.2294 2.44999 15.05 5.27059 15.05 8.74999C15.05 12.2294 12.2294 15.05 8.75005 15.05C5.27065 15.05 2.45005 12.2294 2.45005 8.74999ZM8.75005 1.04999C4.49746 1.04999 1.05005 4.4974 1.05005 8.74999C1.05005 13.0026 4.49746 16.45 8.75005 16.45C10.6243 16.45 12.3421 15.7804 13.6774 14.6673L18.2551 19.245C18.5284 19.5183 18.9717 19.5183 19.245 19.245C19.5184 18.9716 19.5184 18.5284 19.245 18.255L14.6673 13.6773C15.7804 12.3421 16.45 10.6242 16.45 8.74999C16.45 4.4974 13.0026 1.04999 8.75005 1.04999Z"
            fill="black"
          ></path>
        </svg>
        <input
          type="search"
          placeholder="데이터 분석"
          className={styles.input}
        ></input>
      </div>
    </div>
  );
}
