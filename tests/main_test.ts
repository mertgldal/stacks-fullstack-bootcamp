import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { StacksTestnet } from "@stacks/network";
import { makeContractCall, broadcastTransaction, TxOptions } from "@stacks/transactions";
import { getAccount } from "@stacks/transactions";

const network = new StacksTestnet();

Deno.test("Borrow STX using Bitcoin as collateral", async () => {
    const account = await getAccount("YOUR_ACCOUNT_ADDRESS");
    const txOptions: TxOptions = {
        contractAddress: "YOUR_CONTRACT_ADDRESS",
        contractName: "main",
        functionName: "borrow",
        functionArgs: ["<bitcoin-collateral-amount>"],
        senderKey: account.stxPrivateKey,
        network,
    };

    const transaction = await makeContractCall(txOptions);
    const result = await broadcastTransaction(transaction, network);
    
    assertEquals(result.success, true);
});

Deno.test("Interest rate calculation", async () => {
    const account = await getAccount("YOUR_ACCOUNT_ADDRESS");
    const txOptions: TxOptions = {
        contractAddress: "YOUR_CONTRACT_ADDRESS",
        contractName: "main",
        functionName: "calculate-interest",
        functionArgs: ["<loan-amount>", "<duration>"],
        senderKey: account.stxPrivateKey,
        network,
    };

    const transaction = await makeContractCall(txOptions);
    const result = await broadcastTransaction(transaction, network);
    
    assertEquals(result.success, true);
});

Deno.test("Liquidation mechanism for under-collateralized loans", async () => {
    const account = await getAccount("YOUR_ACCOUNT_ADDRESS");
    const txOptions: TxOptions = {
        contractAddress: "YOUR_CONTRACT_ADDRESS",
        contractName: "main",
        functionName: "liquidate",
        functionArgs: ["<loan-id>"],
        senderKey: account.stxPrivateKey,
        network,
    };

    const transaction = await makeContractCall(txOptions);
    const result = await broadcastTransaction(transaction, network);
    
    assertEquals(result.success, true);
});