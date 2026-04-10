import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchTopCoins } from '../services/coinService';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [cardBalance, setCardBalance] = useState(14250.00);
  const [cryptoAssets, setCryptoAssets] = useState([]);
  const [loadingAssets, setLoadingAssets] = useState(true);

  const topUpCard = (amount) => {
    setCardBalance(prev => prev + parseFloat(amount));
  };

  useEffect(() => {
    const loadAssets = async () => {
      setLoadingAssets(true);
      const coins = await fetchTopCoins();
      if (coins && coins.length > 0) {
        // Mock some balances for the top 5 coins, keep others at 0 to just show live market data
        const mappedAssets = coins.map((coin, index) => {
          let balance = 0;
          if (index === 0) balance = 0.045; // BTC
          if (index === 1) balance = 1.245; // ETH
          if (index === 2) balance = 560; // USDT
          if (index === 3) balance = 200; // BNB
          if (index === 4) balance = 142.5; // SOL

          return {
            id: coin.id,
            symbol: coin.symbol.toUpperCase(),
            name: coin.name,
            iconUrl: coin.image,
            price: coin.current_price,
            change: coin.price_change_percentage_24h?.toFixed(2) || '0.00',
            balance: balance,
            value: balance * coin.current_price
          };
        });
        setCryptoAssets(mappedAssets);
      }
      setLoadingAssets(false);
    };

    loadAssets();
    const interval = setInterval(loadAssets, 60000); // 1 minute refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <WalletContext.Provider value={{ cardBalance, topUpCard, cryptoAssets, loadingAssets }}>
      {children}
    </WalletContext.Provider>
  );
};
