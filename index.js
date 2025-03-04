const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Sample data - replace with your own or connect to a database later

// API endpoint to get news data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Simple route for testing if the API is running
app.get('/', (req, res) => {
  res.send('AI Digest API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
