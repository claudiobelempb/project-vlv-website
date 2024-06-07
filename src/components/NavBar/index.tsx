import styles from './NavBar.module.css';
export const NavBar: React.FC = () => {
  return (
    <nav id={styles.nav_container}>
      <input type='checkbox' />
      <div className={styles.nav_hamburger}>
        <div></div>
      </div>
      <div className={styles.nav_menu_container}>
        <div>
          <div>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Villas</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
