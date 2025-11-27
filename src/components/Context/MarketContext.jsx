
import { createContext, useContext, useMemo, useCallback,useState } from 'react';

const MarketContext = createContext(null);

export const MarketProvider = ({children}) => {


const [goodItems, setGoodItems] = useState([
  {
    name: "dog",
    type_of: "art",
    imageSrc: "/card__dog-nft.jpg",
    title: "Dog King",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "parrot",
    type_of: "pixel",
    imageSrc: "/card__parrot-nft.jpg",
    title: "Red pixel parrot",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "cucumber",
    type_of: "art",
    imageSrc: "/card__cucumber-nft.jpg",
    title: "Fany cucumber",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "fish",
    type_of: "pixel",
    imageSrc: "/card__fish-nft.jpg",
    title: "Green-red fish",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "cat",
    type_of: "pixel",
    imageSrc: "/card__cat-nft.jpg",
    title: "Rainbow flying cat",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "banana",
    type_of: "pixel",
    imageSrc: "/card__banana-nft.jpg",
    title: "yellow pixel banana",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "apple",
    type_of: "art",
    imageSrc: "/card__golden-apple-nft.jpg",
    title: "golden yellow apple",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  },
  {
    name: "apple",
    type_of: "art",
    imageSrc: "/card__apple-nft-1.jpg",
    title: "art red apple",
    auctionTime: "3h 1m 50s",
    currentBid: "0.15 ETH"
  }
]);

  
  return (
    <MarketContext.Provider value={ {
        goodItems,
        setGoodItems,
    }}>
      {children}
    </MarketContext.Provider>
  );
};





// Кастомный хук для удобства
export const useMarket = () => {
  const context = useContext(MarketContext);
  if (!context) throw new Error('Используйте useMarket внутри MarketProvider');
  return context;
};