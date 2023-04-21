import styles from "@/styles/HighlightCard.module.css";
const HighlightCard = ({ data }) => {
  return (
    <div className={styles.highlightCard}>
      <div
        className={styles.backgroundGradient}
        style={{ background: data.background }}
      ></div>
      <div className={styles.cardHeader}>
        <img src={data.img} alt="image" className={styles.cardHeaderImage} />
        <div className={styles.cardHeaderDetails}>
          <h2 className={styles.cardHeaderDetailsHeading}>{data.title}</h2>
          <div className={styles.cardHeaderDetailsTextDiv}>
            <span
              className={styles.cardHeaderDetailsText}
              style={{ color: data.color }}
            >
              {data.text}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.cardFooterDiv}>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterLeft}>
            <span>{data.user}</span>
          </div>
          <div className={styles.cardFooterOneRight}>
            <span>{data.score}</span>
            <img src="assets/Frame 1756.png" alt="img" />
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterLeft} style={{ fontWeight: 400 }}>
            <span>{data.expTime}</span>
          </div>
          <div className={styles.cardFooterTwoRight}>
            <span>{data.expVal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
