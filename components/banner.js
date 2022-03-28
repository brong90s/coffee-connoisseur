import styles from "../styles/banner.module.css";

const Banner = (props) => {
  return (
    <div>
      <h1 className={styles.container}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee</p>
      <button onClick={props.handleOnClick} className={styles.button}>{props.buttonText}</button>
    </div>
  );
};

export default Banner;
