import React, { useEf } from 'react';
import './style.css';

import { Box, Button, Grid, Text } from 'grommet';

export default function App() {
  const days = ['m', 't', 'w', 'th', 'f', 'sa', 'su'];

  let areas = [
    days,
    ...[...Array(48)].map((q, index) => days.map((d) => `${d}${index}`)),
  ];

  return (
    <>
      <Grid
        columns={{
          count: 7,
          size: 'auto',
        }}
        rows={{
          count: 96,
          size: 'auto',
        }}
        areas={areas}
        gap="small"
      >
        <Box gridArea="m" background="brand">
          Item
        </Box>
        {/* <Box gridArea="m0" background="brand">Item</Box> */}
        <Box gridArea="t" background="brand">
          Item
        </Box>
        <Box gridArea="w" background="brand">
          Item
        </Box>
        <Box gridArea="th" background="brand">
          Item
        </Box>
        <Box gridArea="f" background="brand">
          Item
        </Box>
        <Box gridArea="sa" background="brand">
          Item
        </Box>
        <Box gridArea="su" background="brand">
          Item
        </Box>
        {[...Array(48)]
          .map((q, index) => days.map((d) => `${d}${index}`))
          .map((d) =>
            d.map((q) => (
              <Box gridArea={q} background="accent-2">
                {q}
              </Box>
            ))
          )}
      </Grid>
    </>
  );
}
