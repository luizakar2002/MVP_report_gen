import React, { useState, useEffect } from 'react';

function GeneratedText() {
  const [generatedText, setGeneratedText] = useState('');

  useEffect(() => {
    // Fetch the generated text from the backend (replace with your API call or data source)
    const fetchGeneratedText = async () => {
      try {
        const response = await fetch('/api/generate-text'); // Replace with your API endpoint
        const data = await response.json();
        setGeneratedText(data.text); // Assuming the response contains the generated text in the "text" field
      } catch (error) {
        console.error('Error fetching generated text:', error);
      }
    };

    fetchGeneratedText();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Generated Text</h2>
      <div>{generatedText}</div>
    </div>
  );
}

export default GeneratedText;

