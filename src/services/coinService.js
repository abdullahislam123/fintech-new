/**
 * CoinGecko API Service for Real-Time Crypto Data
 */

const COIN_IDS = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  USDC: 'usd-coin',
  ARB: 'arbitrum'
};

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCoinPrices = async () => {
  try {
    const ids = Object.values(COIN_IDS).join(',');
    const response = await fetch(
      `${BASE_URL}/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
    );
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    
    return {
      BTC: {
        usd: data[COIN_IDS.BTC]?.usd,
        change: data[COIN_IDS.BTC]?.usd_24h_change
      },
      ETH: {
        usd: data[COIN_IDS.ETH]?.usd,
        change: data[COIN_IDS.ETH]?.usd_24h_change
      },
      SOL: {
        usd: data[COIN_IDS.SOL]?.usd,
        change: data[COIN_IDS.SOL]?.usd_24h_change
      },
      USDC: {
        usd: data[COIN_IDS.USDC]?.usd,
        change: data[COIN_IDS.USDC]?.usd_24h_change
      },
      ARB: {
        usd: data[COIN_IDS.ARB]?.usd,
        change: data[COIN_IDS.ARB]?.usd_24h_change
      }
    };
  } catch (error) {
    console.error('Error fetching coin prices:', error);
    return null;
  }
};

export const fetchTopCoins = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`
    );
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    return data; // Array of top 30 coins with detailed metrics
  } catch (error) {
    console.error('Error fetching coin prices:', error);
    return null;
  }
};
