// Компонент кнопки добавления в корзину для карточки товара
// Будет принимать пропсы: onClick, children, wrappedInLink
const GoodsCardButton = (props) => {
    const {
        // onClick - обработчик клика
        // children - текст кнопки
        // wrappedInLink - обернуть ли в ссылку <a>
        name,
        onAddToCard,
    } = props;


    return (
        <div className="goods__card__button">
            <button className="goods__card__button-item" type="button" onClick={()=>{onAddToCard(name)}}>
                add to basket
            </button>
        </div>
    );
};

export default GoodsCardButton;



