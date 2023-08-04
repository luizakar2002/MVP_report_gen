const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const apiKey = process.env.OPENAI_API_KEY;

const config = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

let storedText = ""; // Variable to store the received text

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
});

// Endpoint to store the generated text
app.post("/store_text", (req, res) => {
  const { text } = req.body;
  storedText = text; // Store the received text in the variable
  res.json({ status: "success" });
});

// Endpoint to serve the stored text to Web App B
app.get("/get_text", (req, res) => {
  res.json({ text: storedText });
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
