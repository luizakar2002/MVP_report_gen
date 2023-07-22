import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, TextField, Button, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
// import TwoColumnPage from './TwoColumnPage';

function SignUp() {
  const [selectedOption, setSelectedOption] = React.useState('MRI');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Selected option:', selectedOption);
  };

  return (
    <Container maxWidth="sm" sx={{marginTop: 15, backgroundColor: '#f0f0f0', height: '500px', display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      {}
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          // width="700px"
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          fullWidth
          // width="700px"
          margin="normal"
          type="password"
        />
        {/* </div> */}
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <FormLabel component="legend">Select</FormLabel>
          <RadioGroup
            row
            aria-label="preferredOption"
            name="preferredOption"
            value={selectedOption}
            onChange={handleChange}
          >
            <FormControlLabel value="MRI" control={<Radio />} label="MRI" />
            <FormControlLabel value="CT" control={<Radio />} label="CT" />
            <FormControlLabel value="X-ray" control={<Radio />} label="X-ray" />
          </RadioGroup>
        </FormControl>
	{/* <Link to="/two-column-page" style={{ textDecoration: 'none' }}> */}
        <Button variant="contained" type="submit" color="primary" sx={{ marginTop: 12 }}>
          Sign Up
        </Button>
	{/* </Link> */}
      </form>
    </Container>
  );
}

export default SignUp;
