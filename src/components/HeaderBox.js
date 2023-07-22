import React from 'react';
import { Paper } from '@mui/material';
import myImage from '../imgsforfront/log-out-03.png';
import myLogo from '../imgsforfront/logo.png';

function HeaderBox() {
  return (
    <Paper sx={{ display: 'flex', padding: '5px', backgroundColor: '#576db6', borderRadius: 0, boxShadow: 'none' }}>
      <img
        src={myLogo}
        alt="Icon"
        style={{ width: 'auto', height: '60px', marginRight: '900px' }}
      />
      <img
        src={myImage}
        alt="Icon"
        style={{ width: '40px', height: '40px', marginLeft: '350px', marginTop: '10px' }}
      />
    </Paper>
  );
}

export default HeaderBox;