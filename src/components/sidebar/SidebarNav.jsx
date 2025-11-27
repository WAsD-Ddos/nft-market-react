import SidebarNavItem from './SidebarNavItem';

const SidebarNav = (props) => {
    const {

    } = props;

    return (
        <nav className="sidebar__nav">
            <ul className="sidebar__list">
                <SidebarNavItem
                    icon="/sidebar_deashboard.png"
                    alt="dashboard"
                    href='#'
                />
                <SidebarNavItem
                    icon="/sidebar_bid.png"
                    alt="bid" href='#'
                />
                <SidebarNavItem
                    icon="/sidebar_favorite.png"
                    alt="favorite"
                    href='#'
                />
                <SidebarNavItem
                    icon="/sidebar_collection.png"

                    alt="collection"
                    href='#'
                />
                <SidebarNavItem
                    icon="/sidebar_profile.png"
                    alt="profile"
                    href='#'
                />
                <SidebarNavItem

                    icon="/sidebar_settings.png"
                    alt="profile"
                    href='#'
                />
            </ul>
        </nav>
    );
};

export default SidebarNav;

