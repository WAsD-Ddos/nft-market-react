


const Button = (props) => {
    const {
        iconSrc,
        alt,
        onClick,
        buttonClassName,
        arial,
    } = props;


    return (
            <button type="button" className={buttonClassName} onClick={onClick} aria-label={arial}>
                <img src={iconSrc} alt={alt || ''} />
            </button>
    )
}

export default Button