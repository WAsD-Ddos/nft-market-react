// Компонент кнопки в tools (mode, basket, profile)

import Button from "../ExtraElements/Button";

// Будет принимать пропсы: iconSrc, alt, onClick, wrapperClassName, buttonClassName
const ToolsButton = (props) => {
    const {
        iconSrc,
        alt,
        onClick,
        wrapperClassName,
        buttonClassName,
    } = props;

    return (
        <div className={wrapperClassName || "tools__mode"}>
           <Button 
        iconSrc = {iconSrc}
        alt = {alt}
        onClick = {onClick}
        buttonClassName = {buttonClassName}
           />
        </div>
    );
};

export default ToolsButton;


