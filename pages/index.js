import styles from "@/styles/Home.module.css";
import HighlightCard from "@/component/HighlightCard";
import NftCard from "@/component/NftCard";
import Sidebar from "@/component/Sidebar";
import { highlightData, nftCardData } from "../utils/data.js";

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.appLeft}>
        <Sidebar />
      </div>
      <div className={styles.appRight}>
        <div className={styles.highlight}>
          <h2 className={styles.highlightTitle}>Highlights</h2>
          <div className={styles.highlightCardContainer}>
            {highlightData?.map((data) => (
              <HighlightCard key={data.id} data={data} />
            ))}
          </div>
        </div>
        <div className={styles.nftContainer}>
          {nftCardData.map((data) => (
            <NftCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
