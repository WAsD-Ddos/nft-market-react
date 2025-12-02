// Компонент карточки товара
// Будет принимать пропсы: name, type_of, imageSrc, title, auctionTime, currentBid
import GoodsCardButton from './GoodsCardButton';

const GoodsCard = (props) => {
    const {
        name,
        type_of,
        imageSrc,
        title,
        auctionTime,
        currentBid,

        onAddToCard,
    } = props;
    

 

    return (
        <div className="goods__card" name={name} type_of={type_of}>
            <div className="goods__card__img">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="goods__card__title">{title}</div>
            <div className="goods__card__info">
                <div className="goods__card__actiontime">
                    <div className="goods__card__actiontime-text">Auction time</div>
                    <div className="goods__card__actiontime-item" action="false">
                        {auctionTime}
                    </div>
                </div>
                <div className="goods__card__currentbid">
                    <div className="goods__card__currentbid-text">Current Bid</div>
                    <div className="goods__card__currentbid-item" current_price="false">
                        {currentBid}
                    </div>
                </div>
            </div>
            <GoodsCardButton 
              onAddToCard ={onAddToCard}
              name = {name}
            />
        </div>
    );
};

export default GoodsCard;

