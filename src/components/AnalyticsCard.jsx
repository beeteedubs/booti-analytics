import React from "react";
import styles from "./AnalyticsCard.module.css";

const AnalyticsCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>Impressions & Drop Captures</span>
        </div>
      </div>

      <div className={styles.metrics}>
        <div className={styles.metricGroup}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              Impressions:{" "}
              <span className={styles.metricSubtitle}>Total (Average)</span>
            </span>
          </div>
          <div className={styles.metricValue}>89 (76%)</div>
          <div className={styles.metricChange}>
            <span className={styles.changePositive}>1 (3%)</span> Vs. Past Day
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.metricGroup}>
          <div className={styles.metricHeader}>
            <span className={styles.metricTitle}>
              Drop Capture:{" "}
              <span className={styles.metricSubtitle}>Total (Average)</span>
            </span>
          </div>
          <div className={styles.metricValue}>89 (76%)</div>
          <div className={styles.metricChange}>
            <span className={styles.changePositive}>1 (3%)</span> Vs. Past Day
          </div>
        </div>
      </div>

      <div className={styles.chart}>
        {/* Chart implementation would go here */}
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div
            className={styles.legendIndicator}
            style={{ backgroundColor: "#00c489" }}
          />
          <span>Impressions</span>
        </div>
        <div className={styles.legendItem}>
          <div
            className={styles.legendIndicator}
            style={{ backgroundColor: "#6b4df8" }}
          />
          <span>Drops Captured</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
