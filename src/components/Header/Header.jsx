import styles from './Header.module.css';
function Header() {
  return (
    <header className={`${styles.header}`}>
      <img className={`${styles.logo}`} src="./Logo.svg" alt="Logo icon" />
      <div className={`${styles.devider}`}>
        <h1 className={`${styles.heading}`}>My task board</h1>
        <p className={`${styles.paragraph}`}>Tasks to keep organized</p>
      </div>
    </header>
  );
}

export default Header;
