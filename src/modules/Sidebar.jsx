import ImgButton from "../components/ExtraElements/ImgButton"
import SidebarNav from "../components/sidebar/SidebarNav"


const Sidebar = (props) => {
  const { 
    sidebarActive , 
    SidebarHanndleClose
  } = props;


  
  

  return (
    <section className={`sidebar ${sidebarActive ? '' : 'sidebar--close'}`}>
      <ImgButton 
        iconSrc="/header__logo.png"
        alt="logo"
        Imgid="sidebar_img-button"
        parentsClassName="sidebar__logo"
        onClick = {SidebarHanndleClose}
      />
      <SidebarNav />
      <div className="sidebar__spacer"></div>
      <ImgButton 
        iconSrc="/sidebar_logout.png"
        alt="logout"
        Imgid="sidebar_img-logout"
        parentsClassName="sidebar__logout"
      />
    </section>
  );

  
};
export default Sidebar
