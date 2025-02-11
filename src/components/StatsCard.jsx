import React from "react";
import styles from "./StatsCard.module.css";

const StatsCard = ({ title, total, categories }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <span className={styles.viewAll}>View All</span>
      </div>

      <div className={styles.stats}>
        <div className={styles.totalSection}>
          <span className={styles.label}>Total</span>
          <div className={styles.value}>{total}</div>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.name} className={styles.category}>
              <div className={styles.categoryHeader}>
                <div
                  className={styles.indicator}
                  style={{ backgroundColor: category.color }}
                />
                <span className={styles.categoryName}>{category.name}</span>
              </div>
              <div className={styles.categoryValue}>{category.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
