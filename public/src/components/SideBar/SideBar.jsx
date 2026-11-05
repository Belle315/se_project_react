import "./SideBar.css";
import avatarImage from "../../assets/chibi.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatarImage} alt="User avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
