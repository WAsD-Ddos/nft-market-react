import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useMarket } from '../components/Context/MarketContext';
import Sidebar from './Sidebar';
import Main from './Main';
import Basket from './Basket';



const FILTERS = [
  {
    value: "all",
    label: "All",
    isActive: true
  },
  {
    value: "art",
    label: "Art",
    isActive: false
  },
  {
    value: "pixel",
    label: "Pixel",
    isActive: false
  }
];


const BASKETLOCALKEY = 'BasketLocal';

function Wrapper() {

  const { goodItems } = useMarket();
  const [sidebarActive, setSidebarActive] = useState(true);
  const [filters, SetFilters] = useState({ query: '', filter: 'all' })
  const [queryPlaceHolder, setQueryPlaceHolder] = useState('Search here')
  const [basketActive, setBasketActive] = useState(false);

  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem(BASKETLOCALKEY);
    if (savedBasket) {
      return JSON.parse(savedBasket);
    }
    return []
  }
  )

  let typingInterval;





  const showQueryPlaceHolder = () => {
    const fullText = 'Search here';
    let currentText = '';
    let index = 0;

    clearInterval(typingInterval);

    typingInterval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setQueryPlaceHolder(currentText)
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }







  const SidebarHanndleClose = useCallback(() => {
    setSidebarActive(!sidebarActive);
  }, [sidebarActive]
  )

  const OnSetBasketActive = useCallback(() => {
    setBasketActive(!basketActive);
  }, [basketActive]
  )





    const onDeleteBusketCard = (key) => {
        SetBasketTasks(prev => prev.filter(item => item.key !== key));
    }



  const onAddToCard = useCallback((name) => {
    console.log('adding to basket')
    const foundItem = goodItems.find(item => item.name === name);

    if (foundItem) {
      const ItemToBasket = {
        key: foundItem.name + Date.now(),
        name: foundItem.name,
        type_of: foundItem.type_of,
        imageSrc: foundItem.imageSrc,
        title: foundItem.title,
        auctionTime: foundItem.auctionTime,
        currentBid: foundItem.currentBid
      };


      setBasket(prev => {
        const newBasket = [...prev, ItemToBasket];
        localStorage.setItem(BASKETLOCALKEY, JSON.stringify(newBasket));
        return newBasket;
      });
    }
  }, [goodItems])


  return (
    <div className="wrapper">


      <Basket
        BasketTasks={basket}
        onDeleteBusketCard = {onDeleteBusketCard}
        isActive={basketActive}
      />



      <Sidebar
        sidebarActive={sidebarActive}
        SidebarHanndleClose={SidebarHanndleClose}
      />

      <Main
        filters={FILTERS}
        title="Trending Bids"
        SidebarHanndleClose={SidebarHanndleClose}
        queryPlaceHolder={queryPlaceHolder}
        showQueryPlaceHolder={showQueryPlaceHolder}
        setQueryPlaceHolder={setQueryPlaceHolder}
        SetFilters={SetFilters}
        currentFilter={filters}

        OnSetBasketActive={OnSetBasketActive}

        onAddToCard={onAddToCard}
      />

    </div>
  );
}

export default Wrapper;
