import { Account, createNetworkConnector } from "dotht";

const main = async () => {
    const connector = createNetworkConnector("polkadot", "smoldot" );
    
    await connector.connect();
    
    const account = new Account([
        "16M3BG9NGwc6kghtbb6pbaTSstggb7poWuim2Bd8W4pqzYf8",
      "16AH3HWtBLec3F4v7SjkYKfude4mDWZBktH1T4NRpzNEnAFH",
    ])

    const balance = await account.balance(connector);
    // Fetch the latest block number
    console.log(`account balance: ${balance.free}`, balance);
    return balance;
}

main().then(console.log).catch(console.log)