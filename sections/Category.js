import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/category.module.css';
import categoryData from '../data/category.json';

const Category = () => {
  <Head>
    <title>Fitness and Gym Category</title>
  </Head>;
  return (
    <>
      <section className={styles.category}>
        {categoryData.map((item) => (
          <div className={styles.single_category} key={item.id}>
            <div className={styles.wrapper}></div>
            <Image
              src={item.image}
              className={styles.category_image}
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              alt={item.name}
            />
            <div className={styles.category_text}>
              <h2 className={styles.category_primary_text}>{item.name}</h2>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Category;
