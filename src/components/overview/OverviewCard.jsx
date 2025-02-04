import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const OverviewCard = ({ title, value }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '16px',
        width: '150px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{
            fontWeight: 500,
            color: '#6b7280',
            marginBottom: '8px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            fontWeight: 700,
            color: '#1f2937',
          }}
        >
          {new Intl.NumberFormat('en-US').format(value)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
