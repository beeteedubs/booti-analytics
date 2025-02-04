import React from 'react';
import { StatusIndicator } from './StatusIndicator';
import styles from './CampaignStats.module.css';

const statsData = [
  { type: 'live', value: 11 },
  { type: 'pending', value: 1 },
  { type: 'offline', value: 0 }
];

export const CampaignStats = () => {
  const total = statsData.reduce((sum, stat) => sum + stat.value, 0);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div>Total Campaigns</div>
          <div className={styles.infoIcon} role="img" aria-label="Information" tabIndex="0" />
        </div>
        <button className={styles.viewAllLink} tabIndex="0">View All</button>
      </div>
      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Total</div>
          <div className={styles.statValue}>
            <div>{total}</div>
          </div>
        </div>
        {statsData.map((stat) => (
          <StatusIndicator 
            key={stat.type}
            type={stat.type}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};