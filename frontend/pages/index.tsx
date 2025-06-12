import React from 'react';
import WalletConnect from '../components/WalletConnect';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">sBTC Lending Protocol</h1>
            <p className="mt-2">Welcome to the sBTC Lending Protocol dApp. Use Bitcoin as collateral to borrow STX.</p>
            <WalletConnect />
            <div className="mt-4">
                <h2 className="text-xl">Dashboard</h2>
                <p>Loan Status: {/* Add loan status logic here */}</p>
                <p>Health Ratio: {/* Add health ratio logic here */}</p>
            </div>
        </div>
    );
};

export default Home;