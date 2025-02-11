const testData = {
    dateRange: "Today 9/1/24",
    freshDataIn: "03:45 / 10 min",
    userName: "Jenny McCoy",
    userAccess: "View Only",
    overview: {
      totalCampaigns: 12,
      liveCampaigns: 11,
      pendingCampaigns: 1,
      offlineCampaigns: 0,
      totalDrops: 59,
      liveDrops: 56,
      pendingDrops: 2,
      offlineDrops: 1
    },
    impressionsAndDrops: {
      impressions: {
        totalAverage: 89,
        percent: 76,
        differenceFromPrevDay: 1
      },
      dropCaptures: {
        totalAverage: 89,
        percent: 76,
        differenceFromPrevDay: 1
      },
      chartData: [
        { time: "1 AM", impressions: 50, dropCaptured: 2 },
        { time: "2 AM", impressions: 80, dropCaptured: 6 },
        { time: "3 AM", impressions: 212, dropCaptured: 10 },
        { time: "4 AM", impressions: 180, dropCaptured: 20 },
        { time: "5 AM", impressions: 260, dropCaptured: 15 },
        { time: "6 AM", impressions: 300, dropCaptured: 25 },
        { time: "7 AM", impressions: 250, dropCaptured: 18 },
        { time: "8 AM", impressions: 350, dropCaptured: 22 },
      ]
    },
    campaigns: [
      { name: "Air Jordan Giveaway", drops: 3, impressions: 42, dropCaptures: 42, percentage: "76%" },
      { name: "Nike SB Sweatshirt", drops: 3, impressions: 42, dropCaptures: 42, percentage: "70%" },
      { name: "Phoenix Suns Giveaway", drops: 3, impressions: 42, dropCaptures: 42, percentage: "76%" }
    ]
  };

export default testData;