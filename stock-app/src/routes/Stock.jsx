import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import style from './style/stock.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const functionOptions = [
    { value: 'TIME_SERIES_DAILY', label: 'Daily Time Series' },
    { value: 'TIME_SERIES_WEEKLY', label: 'Weekly Time Series' },
    { value: 'TIME_SERIES_MONTHLY', label: 'Monthly Time Series' },
    { value: 'GLOBAL_QUOTE', label: 'Global Quote' }
];

const StockStats = ({ stockData, selectedFunction }) => {
    if (!stockData) return null;

    let stats = {};
    let lastDate = null;

    if (selectedFunction === 'GLOBAL_QUOTE') {
        // Global Quote has different key format (02. open instead of 1. open)
        const quote = stockData['Global Quote'];
        if (quote) {
            stats = {
                '1. open': quote['02. open'],
                '2. high': quote['03. high'],
                '3. low': quote['04. low'],
                '4. close': quote['05. price'],
                '5. volume': quote['06. volume']
            };
        }
    } else {
        // Handle Time Series data formats
        switch (selectedFunction) {
            case 'TIME_SERIES_DAILY':
                lastDate = stockData['Time Series (Daily)'] ? 
                    Object.keys(stockData['Time Series (Daily)'])[0] : null;
                stats = lastDate ? stockData['Time Series (Daily)'][lastDate] : {};
                break;
            case 'TIME_SERIES_WEEKLY':
                lastDate = stockData['Weekly Time Series'] ? 
                    Object.keys(stockData['Weekly Time Series'])[0] : null;
                stats = lastDate ? stockData['Weekly Time Series'][lastDate] : {};
                break;
            case 'TIME_SERIES_MONTHLY':
                lastDate = stockData['Monthly Time Series'] ? 
                    Object.keys(stockData['Monthly Time Series'])[0] : null;
                stats = lastDate ? stockData['Monthly Time Series'][lastDate] : {};
                break;
            default:
                break;
        }
    }

    return (
        <div className={style.stockStatsBox}>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Open</td>
                            <td>{stats['1. open'] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>High</td>
                            <td>{stats['2. high'] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>Low</td>
                            <td>{stats['3. low'] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>Close</td>
                            <td>{stats['4. close'] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td>{stats['5. volume'] || 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// StockName Component to display company name and symbol
const StockName = ({ stockData }) => {
    if (!stockData) return null;

    let symbol = 'N/A';
    
    // Check different data structures based on the response
    if (stockData['Global Quote']) {
        symbol = stockData['Global Quote']['01. symbol'];
    } else if (stockData['Meta Data']) {
        // All time series responses (daily, weekly, monthly) include Meta Data
        symbol = stockData['Meta Data']['2. Symbol'];
    }

    return (
        <div className={style.stockNameBlock}>
            <h1>{symbol}</h1>
            <span>{symbol}</span>
            <span>  &#x2022;  </span>
            <span>USD</span>
        </div>
    );
};

// StockPriceSummary Component to display stock price and change
const StockPriceSummary = ({ stockData }) => {
    if (!stockData) return null;

    let price = 'N/A';
    let change = '0';
    let changePercent = '0%';

    if (stockData['Global Quote']) {
        price = stockData['Global Quote']['05. price'];
        change = stockData['Global Quote']['09. change'];
        changePercent = stockData['Global Quote']['10. change percent'];
    } else {
        const timeSeriesData = stockData['Time Series (Daily)'] || 
                             stockData['Weekly Time Series'] || 
                             stockData['Monthly Time Series'];
        if (timeSeriesData) {
            const latestDate = Object.keys(timeSeriesData)[0];
            const latestData = timeSeriesData[latestDate];
            price = latestData['4. close'];
            // Calculate change and percent for time series data
            const prevDate = Object.keys(timeSeriesData)[1];
            if (prevDate) {
                const prevData = timeSeriesData[prevDate];
                change = (parseFloat(price) - parseFloat(prevData['4. close'])).toFixed(2);
                changePercent = ((change / parseFloat(prevData['4. close'])) * 100).toFixed(2) + '%';
            }
        }
    }

    const isPositiveChange = parseFloat(change) >= 0;

    return (
        <div className={style.stockPriceSummaryBox}>
            <div>{new Date().toLocaleDateString()}</div>
            <div className={style.stockSummaryWrap}>
                <div className={style.stockSummaryHead}>{price}</div>
                <div className={style.stockSummaryChange} 
                     style={{ color: isPositiveChange ? 'green' : 'red' }}>
                    <i className={`fa-solid fa-caret-${isPositiveChange ? 'up' : 'down'}`} />
                    <span>{change}</span>
                    <span> ({changePercent})</span>
                </div>
            </div>
        </div>
    );
};

const Stock = () => {
    const { symbol } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [stockData, setStockData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    
    const [selectedFunction, setSelectedFunction] = useState(
        searchParams.get('function') || 'TIME_SERIES_DAILY'
    );

    const handleFunctionChange = (newFunction) => {
        setSelectedFunction(newFunction);
        setSearchParams({ function: newFunction });
        setStockData(null);
        setIsLoading(true);
        setError(null);
        setRetryCount(0);
    };

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                console.log(`Requesting stock data for symbol: ${symbol}, function: ${selectedFunction}`);
                
                const response = await axios.get(`/stock/${symbol}`, {
                    params: { function: selectedFunction }
                });
                
                console.log('Response received from backend:', response.data);
                setStockData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching stock data:', err);
                
                let errorMessage = 'An unexpected error occurred';
                if (err.response) {
                    switch (err.response.status) {
                        case 401:
                            errorMessage = 'Authentication failed. Please check API key.';
                            break;
                        case 429:
                            errorMessage = 'Rate limit exceeded. Please try again later.';
                            break;
                        case 400:
                            errorMessage = 'Invalid request parameters.';
                            break;
                        default:
                            errorMessage = err.response.data?.error || 'Server error occurred';
                    }
                } else if (err.request) {
                    errorMessage = 'No response from server. Please check your connection.';
                }
                
                setError(errorMessage);
                setIsLoading(false);
            }
        };

        if (symbol) {
            fetchStockData();
        }
    }, [symbol, selectedFunction, retryCount]);

    const handleRetry = () => {
        setRetryCount(prev => prev + 1);
    };

    return (
        <>
            <NavBar />
            <div className={style.stockMainWrap}>
                <div className={style.stockMainContent}>
                    <div className={style.functionSelector}>
                        <select 
                            value={selectedFunction}
                            onChange={(e) => handleFunctionChange(e.target.value)}
                            className={style.functionSelect}
                            disabled={isLoading}
                        >
                            {functionOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {isLoading && (
                        <div className={style.loadingIndicator}>
                            Loading stock data...
                        </div>
                    )}

                    {error && (
                        <div className={style.error}>
                            {error}
                            <button 
                                onClick={handleRetry}
                                className={style.retryButton}
                            >
                                Retry
                            </button>
                        </div>
                    )}

                    {!isLoading && !error && (
                        <>
                            <StockName stockData={stockData} />
                            <StockPriceSummary stockData={stockData} />
                            <div>
                                Placeholder for graph.
                            </div>
                            <StockStats stockData={stockData} selectedFunction={selectedFunction} />
                            <div>
                                Latest news on Company Name [Placeholder]
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

// StockStats component remains the same as before
export default Stock;