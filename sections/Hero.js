import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/hero.module.css';
import Button from '../components/Button';

const Hero = () => {
  <Head>
    <title>Hero section</title>
  </Head>;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_main_image}>
          <Image
            src='/images/category-section-image1.jpg'
            className={styles.hero_image}
            layout='fill'
            objectFit='cover'
            objectPosition='center '
            alt='main image of hero section'
          />
        </div>
        <div className={styles.hero_container}>
          <h1 className={styles.primary_title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.secondary_title}>
            Lorem ipsum dolor sit amet exercide and fitness
            <br /> Lorem ipsum dolor sit amet.{' '}
          </p>
          <Button text='start training' round />
        </div>
      </section>
    </>
  );
};

export default Hero;
