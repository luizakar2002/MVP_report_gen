import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import SignUp from './components/signup';
import TwoColumnPage from './components/TwoColumnPage';

function App() {
  return (
    <Router>
      <div>
	{/* <SignUp /> */}
        <TwoColumnPage/>
      </div>
    </Router>
  );
}

export default App;
