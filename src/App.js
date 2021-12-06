import React from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import CandyMachine from "./CandyMachine";
import NotConnectedContainer from "./components/NotConnectedContainer";
import useWalletConnect from "./hooks/useWalletConnect";

const App = () => {
  const { walletAddress } = useWalletConnect();

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Quahog Informer</p>
          <p className="sub-text">Family Guy NFT drop machine</p>
          {!walletAddress && <NotConnectedContainer />}
        </div>
        {walletAddress && <CandyMachine walletAddress={window.solana} />}

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href="https://twitter.com/a11rew"
            target="_blank"
            rel="noreferrer"
          >{`built by @a11rew on @_buildpsace`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
