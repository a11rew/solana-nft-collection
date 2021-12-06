import useWalletConnect from "../hooks/useWalletConnect";

const NotConnectedContainer = () => {
  const { setWalletAddress } = useWalletConnect();

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const pubKey = response.publicKey.toString();
      setWalletAddress(pubKey);
    }
  };

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
