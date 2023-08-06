import React, { useState, useEffect } from 'react';
import HeaderBox from './HeaderBox';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const HTTP = "https://lukarape.pythonanywhere.com/chat";
const GET_TEXT_ENDPOINT = "https://lukarape.pythonanywhere.com/get_text";

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

  // Fetch text from /get_text endpoint and set it as user input on component mount
  useEffect(() => {
    const fetchTextFromEndpoint = async () => {
      try {
        const response = await fetch(GET_TEXT_ENDPOINT);
        const data = await response.json();
        setUserInput(data.text);
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };

    fetchTextFromEndpoint();
  }, []);

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
