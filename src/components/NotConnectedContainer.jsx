import useWalletConnect from "../hooks/useWalletConnect";

const NotConnectedContainer = () => {
  const { connectWallet } = useWalletConnect();

  return (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
};
export default NotConnectedContainer;
