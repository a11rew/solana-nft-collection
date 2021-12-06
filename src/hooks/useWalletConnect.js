import { useEffect, useState } from "react";

const useWalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState();

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

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const pubKey = response.publicKey.toString();
      setWalletAddress(pubKey);
    }
  };

  return { walletAddress, connectWallet, setWalletAddress };
};

export default useWalletConnect;
