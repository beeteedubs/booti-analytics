"use client";

import React from "react";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardLandingCopy}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e3bdf0b71a610ea8931da0648966ac3aed1e2c895499b304f96ebcc3fc7252e?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
              className={styles.logo}
              alt="Company Logo"
            />
            <div className={styles.headerActions}>
              <div className={styles.actionGroup}>
                <div className={styles.actionItem}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/668246c0aeb645bd33b819b9361df6ce23cf648223a998d954a2115473e51eab?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                    className={styles.actionIcon}
                    alt="Settings Icon"
                  />
                  <span className={styles.actionText}>Settings</span>
                </div>
                <div className={styles.actionItem}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa936e864fa8ccf5a95575843ec8d334ad395cf59a140a1cdcf58ca628ea0d26?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                    className={styles.actionIcon}
                    alt="Support Icon"
                  />
                  <span className={styles.actionText}>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.subHeader}>
          <div className={styles.brandInfo}>
            <div className={styles.brandGroup}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c49de3da6133b2cd4e5add6a90594dd054138c281e5d0403a4fadf7826003ff1?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                className={styles.brandLogo}
                alt="Nike Logo"
              />
              <span className={styles.brandName}>Nike</span>
            </div>
          </div>
          <div className={styles.userSection}>
            <div className={styles.dataRefresh}>
              <div className={styles.refreshGroup}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05759943cccee48e8fb3fc91397f97d09499dc9f4a1e02205187c220055c1184?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                  className={styles.refreshIcon}
                  alt="Refresh Icon"
                />
                <div className={styles.refreshText}>
                  Fresh Data In:{" "}
                  <span className={styles.refreshTime}>03:45 / 10 min.</span>
                </div>
              </div>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>JM</div>
              <div className={styles.userDetails}>
                <div className={styles.userName}>Jenny McCoy</div>
                <div className={styles.userRole}>View Only</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <nav className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <div className={styles.navItems}>
                <div className={styles.navItem}>
                  <div className={styles.navIcon}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/268fe67405f7e4bd2fa90c3984aba08e7b89e3154f2b567a6a269e1aa15702ef?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                      alt="Navigation Icon"
                    />
                  </div>
                </div>
                {/* Additional nav items */}
              </div>
              <div className={styles.divider} />
              <div className={styles.comingSoonSection}>
                <div className={styles.comingSoonButton}>Coming Soon</div>
                {/* Additional coming soon items */}
              </div>
            </div>
          </nav>

          <main className={styles.dashboardMain}>
            <div className={styles.controls}>
              <div className={styles.dateFilter}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdb425737027a1655e933b2a3ff8c4db40376afafe8ffac5e2bcf847a6aee8ca?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                  alt="Calendar Icon"
                  className={styles.calendarIcon}
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d6523be4644c2c61d71bbb71567bc8563a979e64c0ea71a757530ba8fdb576?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                  alt="Filter Icon"
                  className={styles.filterIcon}
                />
                <span className={styles.dateRange}>
                  Date Range:{" "}
                  <span className={styles.dateValue}>Today 9/11/24</span>
                </span>
              </div>
              <button className={styles.reportButton}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/abc6ec37cf7800f2c49f5a0a7759ebaf0ff69413c562762bceac0f9f482ffa4c?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                  alt="PDF Icon"
                  className={styles.pdfIcon}
                />
                <span>PDF Report</span>
              </button>
            </div>

            <div className={styles.dashboardTitle}>
              <div className={styles.titleGroup}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/337f51509211bf6482b54b81cefdddec0155b7c24f4da1b87b80fe5d4589cfb3?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                  alt="Dashboard Icon"
                  className={styles.dashboardIcon}
                />
                <div className={styles.titleContent}>
                  <div className={styles.subtitle}>All Campaign Details</div>
                  <h1 className={styles.title}>Dashboard</h1>
                </div>
              </div>
            </div>

            <div className={styles.overviewSection}>
              <div className={styles.overviewHeader}>
                <div className={styles.overviewTitle}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d352603b4203a8b7f9defca609ce68db98b431a7a1d6bcc5e5f90d58e7c656fc?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
                    alt="Overview Icon"
                    className={styles.overviewIcon}
                  />
                  <h2 className={styles.sectionTitle}>Overview</h2>
                </div>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statsCard}>
                  {/* Campaign Stats Card */}
                </div>
                <div className={styles.statsCard}>{/* Drops Stats Card */}</div>
                <div className={styles.analyticsCard}>
                  {/* Analytics Card */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
