const express = require('express');
const cors = require('cors');
const app = express();

// Enable middleware
app.use(express.json());
app.use(cors());

// Simple test endpoint
app.get('/', (req, res) => {
  res.send('AI Digest API is running');
});

// API endpoint with error handling
app.get('/api/data', (req, res) => {
  try {
    // Simple sample data
/*    const sampleData = {
      records: [
        {
          fields: {
            "Title": "Honeywell presenta nueva tecnología",
            "Date": "2025-03-03",
            "Image": "https://placehold.co/400x320",
            "Original Text": "Texto original aquí",
            "GrandMa Text": "Versión simplificada aquí",
            "Votes": 5,
            "URL": "https://example.com/article1"
          }
        },
        {
          fields: {
            "Title": "Educación de nueva era",
            "Date": "2025-03-03", 
            "Image": "https://placehold.co/400x320",
            "Original Text": "Texto original aquí",
            "GrandMa Text": "Versión simplificada aquí",
            "Votes": 3,
            "URL": "https://example.com/article2"
          }
        }
      ]
    };
    
    res.json(sampleData);
  } catch (error) {
    console.error('Error in /api/data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});*/

// Error handler for the whole app
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
