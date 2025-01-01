# Universal Wealth

Welcome to the **Universal Wealth** repository! This project, developed by the **Tech Startup Club** from the University of Washington, is a collaborative effort by 8 team members to create a robust platform for tracking stock and cryptocurrency market data. It provides an intuitive, user-friendly interface for users to explore financial insights.

## Features

### Stock Viewing
- **Search Bar**: Search for stock symbols and access detailed stock pages.
- **Stock Page**:
  - Real-time data on stock performance.
  - Graphs displaying historical data.
  - Key statistics, summaries, and analyst recommendations.

### Cryptocurrency Page
- View detailed cryptocurrency information.
- Graphs and statistics for top cryptocurrencies.
- Data powered by real-time API integration.

### Watchlist
- Add or remove stocks and cryptocurrencies to/from a personalized watchlist.
- Automatic updates to reflect the latest trends.

### User Authentication
- **Dynamic Login/Register Forms**:
  - Interactive forms with client-side validation for smooth user experience.
  - Error messages for invalid entries (e.g., incorrect email formats or weak passwords).
- Secure user authentication using:
  - **JWT (JSON Web Tokens)** for session management.
  - **bcrypt** for password hashing.

### About Page
- Highlights the students and club members who developed the application.
- Details about the Tech Startup Club and its mission.

### Tech Stack
- **Frontend**: React.js for an interactive UI.
- **Backend**: Node.js and Express.js for efficient API management.
- **Database**: PostgreSQL for structured and secure data storage.
- **API Integration**:
  - Alpha Vantage API for stock data.
- **Version Control**: Git for collaboration and source control.

## Installation and Setup

### Prerequisites
- Node.js (v14+ recommended)
- PostgreSQL
- Alpha Vantage API key (Sign up [here](https://www.alphavantage.co/support/#api-key) for free)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/UWTechStartUpClub/fall-2024-project.git
    cd fall-2024-project
    ```

2. Install dependencies:
    ```bash
    cd server
    npm install
    cd ../stock-app
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory:
        ```makefile
        ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
        DB_USER=your_database_user
        DB_PASSWORD=your_database_password
        DB_HOST=your_database_host
        DB_DATABASE=your_database
        DB_PORT=your_database_port
        JWT_SECRET=your_jwt_secret
        REFRESH_SECRET=your_refresh_secret
        ```

4. Run the application:
    ```bash
    cd stock-app
    npm run all
    ```

5. Access the application at `http://localhost:3000`.

## Contributions

This project was collaboratively developed by 8 students of the **Tech Startup Club**, each contributing in different areas.

### Key Contributions

- **Frontend**: Search bar, stock page, crypto page, dynamic forms with validation.
- **Backend**: Secure authentication system, API integrations, and data management.
- **Database**: Optimized tables for user and stock data.

## Future Plans

- Enhancements to the cryptocurrency page, including more data and real-time updates.
- Modularizing application components for better maintainability.
- Improved performance and scalability for large datasets.

## License

This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.

---

Thank you for exploring the Universal Wealth Stock Viewing Application! If you have suggestions, feel free to open an issue or contact us.
