import Button from '../ExtraElements/Button';
import SearchForm from './SearchForm';
import ToolsButton from './ToolsButton';

const Header = (props) => {

    const {
        SidebarHanndleClose,
        queryPlaceHolder,
        showQueryPlaceHolder,
        setQueryPlaceHolder,
        SetFilters,
        OnSetBasketActive,
    } = props
    return (
        <header className="header">
            <div className="header__items">

                <Button
                    iconSrc={'/header__logo.png'}
                    alt='menu'
                    buttonClassName={'burger'}
                    arial={"Open menu"}
                    onClick={SidebarHanndleClose}
                />

                <SearchForm
                    queryPlaceHolder={queryPlaceHolder}
                    showQueryPlaceHolder={showQueryPlaceHolder}
                    setQueryPlaceHolder ={setQueryPlaceHolder}
                    SetFilters = {SetFilters}
                />

                <form className="tools">
                    <ToolsButton
                        wrapperClassName="tools__mode"
                        buttonClassName="tools__mode-item"
                        iconSrc="/header_items_mode.png"
                        alt="mode"
                    />
                    <ToolsButton
                        wrapperClassName="tools__basket"
                        buttonClassName="tools__basket-item"
                        iconSrc="/shopping-basket.png"
                        alt="basket"
                        onClick={OnSetBasketActive}
                    />
                    <ToolsButton
                        wrapperClassNam="tools__profile"
                        buttonClassName="tools__profile-item"
                        iconSrc="/tools_profile.png"
                        alt="profile"
                    />
                </form>
            </div>
        </header>
    )
}
export default Header
