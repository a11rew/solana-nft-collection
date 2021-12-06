import React from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import NotConnectedContainer from "./components/NotConnectedContainer";
import useWalletConnect from "./hooks/useWalletConnect";

const App = () => {
  const { walletAddress } = useWalletConnect();

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {!walletAddress && <NotConnectedContainer />}
        </div>
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
