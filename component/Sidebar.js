import styles from "@/styles/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarHeaderLeft}>
          <div className={styles.sidebarHeaderImg}>
            <img
              src="assets/Rectangle 18.png"
              className={styles.headerImage}
              alt="profile picture"
            />
            <img
              src="assets/Group 370.png"
              className={styles.statusBar}
              alt="cover img"
            />
          </div>
          <div className={styles.levelTag}>
            <span className={styles.levelTagSpan}>LVL 2</span>
          </div>
        </div>
        <div className={styles.sidebarHeaderRight}>
          <h2 className={styles.sidebarHeaderRightH2}>dingaling.eth</h2>
          <span className={styles.sidebarHeaderRightSpan}>0xadgf....jkld</span>
        </div>
      </div>
      <div className={styles.sidebarSocials}>
        <div className={styles.twitterSocial}>
          <img
            src="assets/Social Icons.png"
            alt="twitter-img"
            className={styles.twitterSocialImg}
          />
          <span className={styles.twitterSocialSpan}>@dingalingts</span>
        </div>
        <img
          src="assets/Social Icons1.png"
          alt="www"
          className={styles.worldwidewebimg}
        />
      </div>
      <div className={styles.sidebarDescription}>
        <p className={styles.sidebarDescriptionPara}>
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </p>
      </div>
      <div className={styles.sidebarCommunity}>
        <span className={styles.sidebarCommunitySpan}>
          Common communities (3)
        </span>
        <div className={styles.sidebarCommunityImgContainer}>
          <img src="assets/Rectangle 1599.png" alt="" />
          <img src="assets/Rectangle 1600.png" alt="" />
          <img src="assets/Rectangle 1601.png" alt="" />
          <img src="assets/Rectangle 1602.png" alt="" />
        </div>
      </div>
      <div className={styles.sidebarTags}>
        <div className={styles.sidebarTagsLine1}>
          <div className={styles.outline}>
            <span className={styles.outlineSpan}>Art</span>{" "}
            <span className={styles.outlineSpan}>12%</span>
          </div>
          <div className={styles.outline}>
            <span className={styles.outlineSpan}>Utility</span>{" "}
            <span className={styles.outlineSpan}>12%</span>
          </div>
          <div className={styles.sidebarTag}>
            <span className={styles.sidebarTagSpan}>PFP</span>{" "}
            <span className={styles.sidebarTagSpan}>12%</span>
          </div>
        </div>
        <div className={styles.sidebarTagsLine2}>
          <div className={styles.sidebarTag}>
            <span className={styles.sidebarTagSpan}>Metaverse</span>{" "}
            <span className={styles.sidebarTagSpan}>12%</span>
          </div>
          <div className={styles.sidebarTag}>
            <span className={styles.sidebarTagSpan}>Gaming</span>{" "}
            <span className={styles.sidebarTagSpan}>12%</span>
          </div>
        </div>
        <div className={styles.sidebarTagsLine3}>
          <div className={styles.sidebarTag}>
            <span className={styles.sidebarTagSpan}>PFP</span>{" "}
            <span className={styles.sidebarTagSpan}>12%</span>
          </div>
          <div className={styles.sidebarTag}>
            <span className={styles.sidebarTagSpan}>ens</span>{" "}
            <span className={styles.sidebarTagSpan}>12%</span>
          </div>
        </div>
      </div>
      <button className={styles.subscribeButton}>
        <span className={styles.subscribeButtonSpan}>Subscribe</span>
        <img
          src="assets/Chevron.png"
          alt="abc"
          className={styles.subscribeButtonImg}
        />
      </button>
    </div>
  );
};

export default Sidebar;
