import { STACKS_TESTNET } from '@stacks/network';
import { makeContractCall, broadcastTransaction, ContractCallOptions, getAddressFromPrivateKey } from '@stacks/transactions';

const network = STACKS_TESTNET;
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const contractName = 'main'; // Name of your Clarity contract

async function deployContract() {
    // Use your private key - keep this secure and never commit it to version control
    const privateKey = process.env.STACKS_PRIVATE_KEY || 'YOUR_PRIVATE_KEY'; 
    const senderKey = privateKey;
    const senderAddress = getAddressFromPrivateKey(privateKey);
    
    const transactionOptions: Partial<ContractCallOptions> = {
        network,
        contractAddress,
        contractName,
    };
    const transaction = await makeContractCall({
        senderKey,
        contractAddress,
        contractName,
        functionName: 'deploy', // Replace with your contract's deploy function
        functionArgs: [],
        ...transactionOptions,
    });
    const result = await broadcastTransaction({
        transaction,
        network,
    });
    console.log('Transaction result:', result);
}

deployContract().catch(error => {
    console.error('Error deploying contract:', error);
});