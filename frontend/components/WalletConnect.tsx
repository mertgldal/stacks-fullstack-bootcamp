import React, { useEffect, useState } from 'react';
import { StacksProvider, useWallet } from '@stacks/connect-react';
import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';

const WalletConnect: React.FC = () => {
    const { doOpenAuth } = useWallet();
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const checkConnection = async () => {
            const userSession = await doOpenAuth();
            setIsConnected(!!userSession);
        };
        checkConnection();
    }, [doOpenAuth]);

    const handleConnect = async () => {
        await doOpenAuth();
        setIsConnected(true);
    };

    return (
        <div>
            {isConnected ? (
                <p>Wallet Connected</p>
            ) : (
                <button onClick={handleConnect}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;