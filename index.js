// Backend API for AI Digest
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// Enable middleware
app.use(express.json());

// Configure CORS properly - resolves the CORS issues
app.use(cors({
  origin: '*',  // Allow all origins in development
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests for all routes
app.options('*', cors());

// Environment variables for Airtable
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

// Check if environment variables are set
if (!AIRTABLE_API_KEY || !BASE_ID || !TABLE_NAME) {
  console.warn("Warning: Missing Airtable environment variables");
}

// Root endpoint for health checks
app.get('/', (req, res) => {
  // Set CORS headers explicitly
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  res.send('AI Digest API is running');
});

// Main data endpoint with optimization and caching
app.get('/api/data', async (req, res) => {
  // Set CORS headers explicitly
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  try {
    // Only select fields we need to reduce payload size
    const fields = 'Title,Date,Image,Original%20Text,GrandMa%20Text,Votes,URL';
    
    const response = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?fields=${fields}&maxRecords=100`, 
      {
        headers: { "Authorization": `Bearer ${AIRTABLE_API_KEY}` }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Add Cache-Control header to allow browsers to cache the response
    res.set('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes
    res.json(data);
  } catch (error) {
    console.error("Error fetching Airtable data:", error);  
  }
});

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
