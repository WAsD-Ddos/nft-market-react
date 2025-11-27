// Компонент списка карточек товаров
// Будет принимать пропсы: items (массив карточек)
// Будет рендериться массивом (массив создашь сам)
import GoodsCard from './GoodsCard';
import { useMarket } from '../Context/MarketContext';


const GoodsCardsList = (props) => {

    const { goodItems } = useMarket();

    const {
        onAddToCard,
    } = props
    
  
    let filteredItems;
    return (
        <div className="goods__cards">
            {goodItems.map((item, index) => {
                return(
                <GoodsCard
                    key={item.name + index}
                    name={item.name}
                    type_of={item.type_of}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    auctionTime={item.auctionTime}
                    currentBid={item.currentBid}
                    onAddToCard = {onAddToCard}
                />
                )
             })}
        </div>
    );
};

export default GoodsCardsList;

