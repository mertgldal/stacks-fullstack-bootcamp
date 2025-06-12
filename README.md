# sBTC Lending Protocol

## Project Description
The sBTC Lending Protocol is a decentralized application (dApp) built on the Stacks blockchain that allows users to borrow STX by using Bitcoin as collateral. The protocol includes features such as interest rate calculations based on market conditions, a liquidation mechanism for under-collateralized loans, and a user dashboard to monitor loan status and health ratios.

## Features
- **Borrow STX with Bitcoin Collateral**: Users can leverage their Bitcoin holdings to borrow STX.
- **Interest Rate Calculation**: The protocol dynamically calculates interest rates based on current market conditions.
- **Liquidation Mechanism**: Loans that fall below a certain collateralization ratio are subject to liquidation.
- **User Dashboard**: A comprehensive dashboard that displays loan status, health ratios, and other relevant information.
- **Wallet Integration**: Supports Hiro Wallet and Xverse for seamless user experience.

## 🛠️ Technology Stack

- **Stacks Blockchain**
- **Clarity Smart Contracts**
- **Next.js** / **React**
- **TypeScript**
- **Node.js**
- **Hiro Wallet & Xverse Integration**

## Project Structure
```
stacks-dapp-project
├── contracts
│   └── main.clar          # Clarity smart contract for the lending protocol
├── frontend
│   ├── components
│   │   └── WalletConnect.tsx  # Component for wallet connection
│   ├── pages
│   │   ├── _app.tsx          # Custom App component for Next.js
│   │   └── index.tsx         # Main entry point of the frontend application
│   ├── public                # Static assets (images, icons, etc.)
│   ├── styles
│   │   └── globals.css       # Global CSS styles
│   ├── tsconfig.json         # TypeScript configuration
│   ├── package.json          # npm configuration
│   └── README.md             # Frontend documentation
├── scripts
│   └── deploy.ts             # Deployment script for the Clarity smart contract
├── tests
│   └── main_test.ts          # Test cases for the Clarity smart contract
└── README.md                 # Overall project documentation
```

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hiro Wallet](https://www.hiro.so/wallet) or [Xverse Wallet](https://www.xverse.app/)
- [Git](https://git-scm.com/)

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd stacks-dapp-project
   ```

2. **Install Dependencies**:
   Navigate to the `frontend` directory and install the required packages:
   ```
   cd frontend
   npm install
   ```

3. **Deploy the Smart Contract**:
   Run the deployment script to deploy the Clarity smart contract to the Stacks testnet:
   ```
   cd ../scripts
   ts-node deploy.ts
   ```

4. **Run the Frontend**:
   Start the Next.js application:
   ```
   cd ../frontend
   npm run dev
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to access the sBTC Lending Protocol dApp.

## Additional Features
- Automated notifications for loan status changes.
- Integration with the sBTC bridge for Bitcoin collateral management.

## Testing
To run the tests for the Clarity smart contract, navigate to the `tests` directory and execute:
```
ts-node main_test.ts
```
