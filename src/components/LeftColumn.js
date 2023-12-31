import React, { useState, useEffect } from 'react';
import { Paper, TextField, IconButton, Button } from '@mui/material';
import searchicon from '../imgsforfront/search.png';

const HTTP = "https://lukarape.pythonanywhere.com";
const GET_TEXT_ENDPOINT = `${HTTP}/get_text`;

function LeftColumn({ userInput, handleUserInputChange, handleGenerateClick }) {
  const [fetchedText, setFetchedText] = useState('');

  const fetchTextFromEndpoint = async () => {
    try {
      const response = await fetch(GET_TEXT_ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        setFetchedText(data.text);
      } else {
        console.error('Error fetching text:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };

  const handleSetUserInput = () => {
    handleUserInputChange({ target: { value: fetchedText } });
  };

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
          value={fetchedText || userInput} // Display fetchedText if available, otherwise display userInput
          onChange={handleUserInputChange}
        />
        <Button variant="contained" type="submit" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "45px", border: '2px solid #4357a3' }} onClick={handleGenerateClick}>
          Generate
        </Button>
        <Button variant="contained" type="button" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "10px", border: '2px solid #4357a3' }} onClick={fetchTextFromEndpoint}>
          Get audio text
        </Button>
        <Button variant="contained" type="button" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "10px", border: '2px solid #4357a3' }} onClick={handleSetUserInput}>
          Set audio text
        </Button>
        <div>
          <p>Fetched Text: {fetchedText}</p>
        </div>
      </Paper>
    </div>
  );
}

export default LeftColumn;
