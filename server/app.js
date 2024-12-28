const express = require('express');
const { getStockData, fetchStockData } = require('./AlphaVantageService');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
// const stockRoutes = require('./routes/stockRoutes');

// Initialize the Express app
const app = express();

/** CORS */
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

/** Middleware */
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet()); // Secure HTTP headers

/** Set the view engine */
app.set('view engine', 'ejs');
app.use(express.static('public'));

/** Define routes */

/** Stock symbol route */

// this is what we want to use
// app.use('/stock/:symbol', stockRoutes);

// this is working
app.get('/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  let functionType = req.query.function || 'TIME_SERIES_DAILY';

  try {
    console.log(`Processing request for ${symbol} with function type ${functionType}`);
    
    try {
      const [overviewData, marketData] = await Promise.all([
        fetchStockData(symbol, 'OVERVIEW'),  // Always fetch overview
        fetchStockData(symbol, functionType) // The service will handle intraday params internally
      ]);

      console.log('Overview data received:', !!overviewData);
      console.log('Market data received:', !!marketData);

      // Combine the data into a single response
      const combinedData = {
        overview: overviewData,
        market_data: marketData
      };

      res.json(combinedData);
    } catch (error) {
      console.error('Error in Promise.all:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in stock route:', error);
    
    // Handle specific error cases
    if (error.message.includes('Invalid API key')) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    if (error.message.includes('Invalid request parameters')) {
      return res.status(400).json({ error: 'Invalid request parameters' });
    }
    if (error.message.includes('API Rate Limit')) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    }
    
    // Generic error response
    res.status(500).json({ 
      error: 'Error fetching stock data',
      message: error.message 
    });
  }
});

/** About route */
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

/** Contact route */
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

/** Auth routes */
app.use('/auth', authRoutes);

/** Contact form submission */
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Process form data (e.g., save to database, send email, etc.)
  res.send(`Thank you, ${name}, we will get back to you soon!`);
});

/** Set the port and start the server */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
