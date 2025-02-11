import React from 'react';

function Overview({ overview }) {
  return (
    <div className="overview-cards">
      <div className="overview-card">
        <h3>Total Campaigns</h3>
        <p>{overview.totalCampaigns}</p>
        <small>
          Live: {overview.liveCampaigns} | Pending: {overview.pendingCampaigns} | Offline: {overview.offlineCampaigns}
        </small>
      </div>
      <div className="overview-card">
        <h3>Total Drops</h3>
        <p>{overview.totalDrops}</p>
        <small>
          Live: {overview.liveDrops} | Pending: {overview.pendingDrops} | Offline: {overview.offlineDrops}
        </small>
      </div>
    </div>
  );
}

export default Overview;
