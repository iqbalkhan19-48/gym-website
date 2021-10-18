import styles from '../styles/button.module.css';

const Button = ({ text, round }) => {
  return (
    <div className={styles.button}>
      <button className={round ? styles.button_round : styles.button_sharp}>
        {text}
      </button>
    </div>
  );
};

export default Button;
