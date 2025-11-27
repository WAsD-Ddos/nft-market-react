import Button from "../ExtraElements/Button";

const BasketCard = (props) => {
    const {
        iconSrs,
        title,
        onDelete,
    } = props;





    return (
        <div className="basket__card goods__card">
            <div className="goods__card__close">

                <Button 
                  iconSrc ='/img/close__delete.png'
                  alt = 'delete-basket-card'
                  onClick = {onDelete}
                  buttonClassName ='goods__card__close-button'
                />
            </div>
            <div className="goods__card__img">
                <img src={iconSrs || ''} alt="" />
            </div>
            <div className="goods__card__title">
                {title} 
            </div>
            <div className="goods__card__info">
                <div className="goods__card__actiontime">
                    <div className="goods__card__actiontime-text">Auction time</div>
                    <div className="goods__card__actiontime-item" data-action="false">
                        3h 1m 50s
                    </div>
                </div>
                <div className="goods__card__currentbid">
                    <div className="goods__card__currentbid-text">Current Bid</div>
                    <div className="goods__card__currentbid-item" data-current-price="false">
                        0.15 ETH
                    </div>
                </div>
            </div>
            <div className="goods__card__button">
                <button className="goods__card__button-item" type="button">
                    BUY
                </button>
            </div>
        </div> 
    ); 
};

export default BasketCard;