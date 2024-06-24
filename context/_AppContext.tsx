import { ethers } from "ethers";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { CHAIN_ID } from "../utils/constants";

interface AppContextType {
  connected: boolean;
  isOwner: boolean;
  account: string;
  connectWallet: () => Promise<void>; // Find better typing for connect wallet
  latestDonation: number;
  error: string;
}

export const AppContext = createContext<AppContextType>({
  connected: false,
  isOwner: false,
  account: "",
  connectWallet: async () => {},
  latestDonation: 0,
  error: "",
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [connected, setConnected] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [account, setAccount] = useState("");
  const [latestDonation, setLatestDonation] = useState(0);
  const [charityData, setCharityData] = useState([]);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(
    null
  );
  const [error, setError] = useState("");

  const checkEthereumExists = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_chainId"); // Check connection by sending a request
        setProvider(provider);
        return provider;
      } catch (error) {
        console.error("Error while connecting to Ethereum provider:", error);
        setError("Error connecting to wallet. Please try again.");
        return null;
      }
    }
    setError("Please install MetaMask.");
    return null;
  };

  const ensureNetwork = async () => {
    if (!provider) return; // Skip if no provider
    const chainId = await provider.send("eth_chainId");
    if (chainId !== CHAIN_ID) {
      try {
        await provider.send("wallet_switchEthereumChain", [{ chainId: CHAIN_ID }]);
        console.log("You have switched to the right network");
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await provider.send("wallet_addEthereumChain", [
              {
                chainId: "0xaa36a7",
                chainName: "sepolia Test network",
                rpcUrls: ["https://eth-sepolia.g.alchemy.com/v2/x2hC9QfiIYGJf4mQWfu6bQgLvrOegki2"],
                blockExplorerUrls: ["https://sepolia.etherscan.io/"],
                nativeCurrency: {
                  symbol: "sepoliaETH",
                  decimals: 18,
                },
              },
            ]);
            console.log("Network added successfully. Please switch manually.");
          } catch (err) {
            console.error("Error adding network:", err);
            setError("Failed to add network. Please add manually.");
          }
        } else {
          console.error("Error switching network:", switchError);
          setError("Error switching network. Please try again.");
        }
      }
    }
  };

  const getConnectedAccounts = async () => {
    setError("");
    if (!provider) return; // Skip if no provider
    try {
      const accounts = await provider.send("eth_requestAccounts");
      console.log(`accounts: ${accounts} from getConnectedAccounts()`);
      if (accounts.length > 0) {
        setConnected(true);
        setAccount(accounts[0]);
        await ensureNetwork();
        const owner = await contract?.owner();
        if (owner.toLowerCase() === accounts[0].toLowerCase()) {
          setIsOwner(true);
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const connectWallet = async () => {
    setError("");
    const ethereum = await checkEthereumExists();
    if (ethereum) {
      try {
        // @ts-ignore
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(`accounts: ${accounts} from connectWallet()`);
        // NOTE: Check if accounts returns more than one element in the list
        if (accounts.length != 0) {
          setConnected(true);
          setAccount(accounts[0]);
          ensureNetwork();
          const owner = await contract?.owner();
          if (owner.toLowerCase() == accounts[0].toLowerCase())
            setIsOwner(true);
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError("Please Install MetaMask.");
      alert("Please Install MetaMask!");
    }
  };

  useEffect(() => {
    const handleChange = async () => {
      const ethereum = await checkEthereumExists();
      if (ethereum) {
        ethereum.on("accountsChanged", getConnectedAccounts);
        await getConnectedAccounts();
       
        console.log(`error: ${error}`);
      }
    };

    handleChange();

    return () => {
      // @ts-ignore for now!!!!
      const { ethereum } = typeof window !== "undefined" ? window : {};
      if (ethereum) {
        ethereum.removeListener("accountsChanged", getConnectedAccounts);
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        connected,
        isOwner,
        account,
        connectWallet,
        latestDonation,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;