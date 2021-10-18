import Head from 'next/head';

import Category from '../sections/Category';
import Hero from '../sections/Hero';
import Services from '../sections/Services';

function Home() {
  <Head>
    <title>Gym ||Fitnes Club</title>
    <meta name='description' content='Be Fit with exercise'></meta>
  </Head>;
  return (
    <>
      <main className='coomon_style'>
        <Hero />
        <Category />
        <Services />
      </main>
    </>
  );
}

export default Home;
