import React, { useState } from 'react';
import HeaderBox from './HeaderBox';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const HTTP = "http://localhost:8000/chat";

function TwoColumnPage() {
  const [userInput, setUserInput] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const generateText = async () => {
    try {
      const response = await fetch(HTTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: `Behave like the best radiologist and generate radiological report for this abnormality: ${userInput}` }), // Add the prompt here
      });

      const data = await response.text();
      setGeneratedText(data);
    } catch (error) {
      console.error('Error fetching generated text:', error);
    }
  };

  return (
    <div>
      <HeaderBox />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <LeftColumn userInput={userInput} handleUserInputChange={handleUserInputChange} handleGenerateClick={generateText} />
        <RightColumn generatedText={generatedText} />
      </div>
    </div>
  );
}

export default TwoColumnPage;
