import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import headerData from '../data/header.json';

const Header = () => {
  <Head>
    <title> Header of fitness website </title>
    <meta name='description' content='main header of webiste'></meta>
  </Head>;
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_content}>
          <div className={styles.nav_brand_logo}>
            <Link href='/'>
              <a className={styles.nav_logo}>
                Fit<span className={styles.logo_style}>B</span>ody
              </a>
            </Link>
          </div>
          <ul className={styles.nav_items}>
            {headerData.map((item) => (
              <li className={styles.nav_lists} key={item.id}>
                <Link href={item.href}>
                  <a className={styles.nav_links}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
