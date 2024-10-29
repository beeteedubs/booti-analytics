import React, { useState, useEffect } from 'react';
import { BarChart, LabelList, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/dashboard');
        const data = await response.json();
        console.log(data.mixpanelData);
        if (response.ok) {
          // Transform Mixpanel data for Recharts
          const transformedData = Object.entries(data.mixpanelData).map(([key, value]) => ({
            name: key,
            value: value.all,
          }));
          setChartData(transformedData);
        } else {
          setError('Error fetching Mixpanel data');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Error fetching Mixpanel data');
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1>Nike Analytics Dashboard</h1>
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
  );
};

export default Dashboard;
