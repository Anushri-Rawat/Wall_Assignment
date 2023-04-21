import styles from "@/styles/NftCard.module.css";
const NftCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={data.img} alt="image" />
        <div className={styles.timelineTag}>
          <span>3 Months</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.innerCardBody}>
          <div className={styles.cardBodyTitle}>
            <h4>{data.user}</h4>
          </div>
          <div className={styles.cardBodyDiv}>
            <div className={styles.cardBodyLeftText}>Bought</div>
            <div className={styles.cardBodyRightText}>
              <span className={styles.whiteText}>{data.boughtScore}</span>
              <img src="assets/Frame 1756.png" alt="img" />
            </div>
          </div>
          <div className={styles.cardBodyDiv}>
            <div className={styles.cardBodyLeftText}>Floor</div>
            <div className={styles.cardBodyRightText}>
              <span className={styles.whiteText}>{data.floorScore}</span>
              <img src="assets/Frame 1756.png" alt="img" />
              <span className={styles.greenText}>{data.floorPer}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
