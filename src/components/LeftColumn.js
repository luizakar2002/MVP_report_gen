import React from 'react';
import { Paper, TextField, IconButton, Button } from '@mui/material';
import searchicon from '../imgsforfront/search.png';

function LeftColumn({ userInput, handleUserInputChange, handleGenerateClick }) {
  return (
    <div
      style={{
        justifyContent: 'row',
        width: '500px',
        marginTop: '70px',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '5px',
          backgroundColor: '#e4e4ee',
          borderRadius: '5',
          boxShadow: 'none',
          marginBottom: '10px',
          marginLeft: '40px',
          width: '400px',
        }}
      >
        <TextField
          label="Keywords"
          fullWidth
          border="2px solid #4357a3"
        />
        <IconButton
          color="primary"
          style={{ backgroundColor: '#e4e4ee', marginTop: "-43px", width: '30px', height: '30px', marginLeft: '350px'}}
        >
          <img
            src={searchicon}
            alt="Icon"
            style={{ width: '30px', height: '30px' }}
          />
        </IconButton>
      </Paper>
      <Paper sx={{ display: 'flex', flexDirection: 'column', flex: 2, padding: '20px', marginRight: '40px', marginLeft: '40px', marginTop: '365px', height: '485px', borderRadius: 5 }}>
        <TextField
          label="Enter your text here"
          multiline
          rows={15.3}
          fullWidth
          value={userInput}
          onChange={handleUserInputChange}
        />
        <Button variant="contained" type="submit" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "45px", border: '2px solid #4357a3' }} onClick={handleGenerateClick}>
          Generate
        </Button>
      </Paper>
    </div>
  );
}

export default LeftColumn;
