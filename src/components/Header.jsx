import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <h1 className={styles["japanese-lead"]}>寿司飯計算機</h1>
        <h2 className="colored-text">Sushi Rice Calculator</h2>
      </div>
    </div>
  )
}

export default Header