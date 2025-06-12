import React, { useEffect, useState } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const WalletConnect: React.FC = () => {
    const [address, setAddress] = useState<string>('');
    const [isConnected, setIsConnected] = useState(false);

    const appConfig = new AppConfig(['store_write', 'publish_data']);
    const userSession = new UserSession({ appConfig });
    
    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            const userData = userSession.loadUserData();
            setAddress(userData.profile.stxAddress.testnet || userData.profile.stxAddress.mainnet);
            setIsConnected(true);
        }
    }, []);

    const connectWallet = () => {
        showConnect({
            appDetails: {
                name: 'sBTC Lending Protocol',
                icon: window.location.origin + '/favicon.ico',
            },
            redirectTo: '/',
            onFinish: () => {
                const userData = userSession.loadUserData();
                setAddress(userData.profile.stxAddress.testnet || userData.profile.stxAddress.mainnet);
                setIsConnected(true);
            },
            userSession,
        });
    };

    const disconnect = () => {
        userSession.signUserOut();
        setAddress('');
        setIsConnected(false);
    };

    return (
        <div className="my-8">
            {!isConnected ? (
                <button 
                    className="px-8 py-3 bg-primary-DEFAULT hover:bg-primary-dark text-neutral-lightest font-semibold rounded-lg shadow-md transform transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
                    onClick={connectWallet}
                >
                    Connect Wallet
                </button>
            ) : (
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg text-neutral-dark dark:text-neutral-light">
                        Connected: <span className="font-mono bg-neutral-light dark:bg-neutral-dark px-2 py-1 rounded">{address.slice(0,6)}...{address.slice(-4)}</span>
                    </p>
                    <button 
                        className="px-8 py-3 bg-secondary-DEFAULT hover:bg-secondary-dark text-neutral-lightest font-semibold rounded-lg shadow-md transform transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-opacity-50"
                        onClick={disconnect}
                    >
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};

export default WalletConnect;