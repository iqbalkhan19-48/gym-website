import styles from '../styles/services.module.css';
import servicesData from '../data/services.json';
import { FcSportsMode } from 'react-icons/fc';

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <h2 className={styles.primary_heading}>
          We do awesome services for our clients
        </h2>
        <h1 className={styles.secondary_heading}>
          Check our <span>services</span>
        </h1>

        <div className={styles.main_service}>
          {servicesData.map((item) => (
            <div className={styles.single_service} key={item.id}>
              <div className={styles.icon}>
                <FcSportsMode />
              </div>
              <h3 className={styles.service_heading}>{item.name}</h3>
              <p className={styles.service_description}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
