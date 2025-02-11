import React, { useState, useEffect } from 'react';
import { BarChart, LabelList, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import OverviewCard from './overview/OverviewCard';

const Dashboard = () => {
  const [chartData, setChartData] = useState([])
  const [missionData, setMissionsData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/dashboard');
        const data = await response.json();
        if (response.ok) {

          const funnelData = Object.entries(data.funnels.mixpanelData).map(
            ([key, value]) => ({
              name: key,
              value: value.all, // Use `value.all` for the value
            })
          );

          // Add missions data
          const missionData = [
            { title: 'Total Campaigns', value: data.missions.total_campaigns },
            { title: 'Total Drops', value: data.missions.total_drops },
          ];

          // Combine both datasets
          // const transformedData = [...missionData, ...funnelData];

          setChartData(funnelData);
          setMissionsData(missionData)
        } else {
          setError('Error fetching Mixpanel data');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Error fetching Mixpanel data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading dashboard...</div>;
  if (!missionData || !chartData) return <div>No data available</div>;

  return (
    <div className="dashboard-container">
      {/* HEADER SECTION */}
      {/* <div className="header-bar">
        <div className="header-left">
          <h2>Dashboard</h2>
          <p>Date Range: {dateRange}</p>
        </div>
        <div className="header-right">
          <p>Fresh Data In: {freshDataIn}</p>
          <p>{userName} ({userAccess})</p>
          <button>Settings</button>
          <button>Support</button>
        </div>
      </div> */}
    {/* <Overview overview={overview} /> */}

    <div>
      <h1>Nike Analytics Dashboard</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
      {missionData.map((item, index) => (
        <OverviewCard key={index} title={item.title} value={item.value} />
      ))}
    </div>
      {error && <p>{error}</p>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8">
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Dashboard;
