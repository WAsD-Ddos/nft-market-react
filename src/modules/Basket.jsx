import { memo } from "react";
import BasketList from "../components/Basket/BasketList"


const Basket = memo((props) => {

    const {
        BasketTasks,
        isActive,
        onDeleteBusketCard,
    } = props

    return (
        <section className={`basket ${isActive ? 'active' : ''}`}>
            <div className="container">
                <BasketList
                    BasketTasks={BasketTasks}
                    onDeleteBusketCard={onDeleteBusketCard}
                />
            </div>
        </section>
    )
})

Basket.displayName = 'Basket';

export default Basket
