import BasketCard from "./BasketCard";


const BasketList = (props) => {

    const {
       BasketTasks,
       onDeleteBusketCard
    } = props
    
    return (
        <div className="basket__cards goods__cards">
            {BasketTasks.length > 0 ? (
                BasketTasks.map(item=> (
                    <BasketCard 
                       key={item.name + Date.now()}
                       title = {item.title}
                       iconSrc = {item.imageSrc}
                       onDelete = {onDeleteBusketCard}
                    />
                ))
            ) : (
                <div className="basket__empty">
                    <p>Your basket is empty</p>
                </div>
            )}
        </div>
    )
}
export default BasketList
