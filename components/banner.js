import styles from "../styles/banner.module.css";

const Banner = (props) => {
  return (
    <div>
      <h1 className={styles.container}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee</p>
      <div className="styles.buttonWrapper">
      <button onClick={props.handleOnClick} className={styles.button}>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default Banner;
