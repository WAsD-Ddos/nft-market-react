// Компонент для элемента навигации в сайдбаре
// Будет принимать пропсы: icon, alt, href
const SidebarNavItem = (props) => {
    const {
        icon,
        alt,
        href,
    } = props;

    return (
        <li className="sidebar__list-item">
            <a href={href} className="sidebar__link">
                <img src={icon} alt={alt} />
            </a>
        </li>
    );
};

export default SidebarNavItem;

// Массив данных для SidebarNavItem:
// [
//   {
//     icon: "/sidebar_deashboard.png",
//     alt: "dashboard",
//     href: "#"
//   },
//   {
//     icon: "/sidebar_bid.png",
//     alt: "bid",
//     href: "#"
//   },
//   {
//     icon: "/sidebar_favorite.png",
//     alt: "favorite",
//     href: "#"
//   },
//   {
//     icon: "/sidebar_collection.png",
//     alt: "collection",
//     href: "#"
//   },
//   {
//     icon: "/sidebar_profile.png",
//     alt: "profile",
//     href: "#"
//   },
//   {
//     icon: "/sidebar_settings.png",
//     alt: "settings",
//     href: "#"
//   }
// ]

