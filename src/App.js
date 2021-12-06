import React, { useState, useEffect } from "react";
import "./App.css";
import CandyMachine from "./CandyMachine";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const pubKey = response.publicKey.toString();
      setWalletAddress(pubKey);
    }
  };

  const checkIfWalletConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found");
        }

        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          "Connected with Public Key:",
          response.publicKey.toString()
        );

        setWalletAddress(response.publicKey.toString());
      } else console.log("Phantom wallet not found");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletConnected();
      console.log("I got called");
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <div className="bg-image" />
      <div className="container">
        <div className="header-container">
          <p className="header">📜 The Quahog Informer</p>
          <p className="sub-text">Family Guy NFT drop</p>
          {!walletAddress && (
            <button
              className="cta-button connect-wallet-button"
              onClick={connectWallet}
            >
              Connect to Wallet
            </button>
          )}
        </div>
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </div>
    </div>
  );
};

export default App;
