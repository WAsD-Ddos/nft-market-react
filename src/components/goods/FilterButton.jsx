// Компонент кнопки фильтра (All, Art, Pixel)
// Будет принимать пропсы: value, label, isActive, onClick
const FilterButton = (props) => {
    const {
        value,
        label,
        isActive,
        onClick,
    } = props;

    return (
        <button 
            type="button" 
            value={value} 
            className={`goods__button ${isActive ? 'button__choosed' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FilterButton;

