const ImgButton = (props) => {
    const {
        iconSrc,
        alt,
        onClick,
        parentsClassName,
        Imgid,
        className,
    } = props;

    
    return (
            <div className={parentsClassName}>
                <img className = {className} id={Imgid} src={iconSrc} alt={alt} onClick={onClick}/>
            </div>
    )
}

export default ImgButton