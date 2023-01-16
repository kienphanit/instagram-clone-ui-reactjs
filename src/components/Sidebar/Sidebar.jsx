import clsx from "clsx";
import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import LogoHome from "./Logo/LogoHome";
import LogoSearch from "./Logo/LogoSearch.jsx"
import LogoExplore from "./Logo/LogoExplore.jsx"
import LogoReels from "./Logo/LogoReels.jsx"
import LogoMessage from "./Logo/LogoMessage.jsx"
import LogoHeart from "./Logo/LogoHeart.jsx"
import LogoCreate from "./Logo/LogoCreate.jsx"
import LogoMenu from "./Logo/LogoMenu.jsx"

const Sidebar = () => {
  const list = [
    { type: "Link", link: "/", name: "Trang chủ", icon: LogoHome },
    { type: "Toggle", link: "/", name: "Tìm kiếm", icon: LogoSearch },
    { type: "Link", link: "/explore", name: "Khám phá", icon: LogoExplore },
    { type: "Link", link: "/reels/video", name: "Reels", icon: LogoReels },
    { type: "Link", link: "/direct/inbox", name: "Tin nhắn", icon: LogoMessage },
    { type: "Toggle", link: "/", name: "Thông báo", icon: LogoHeart },
    { type: "Link", link: "/", name: "Tạo", icon: LogoCreate },
    { type: "Link", link: "/", name: "Trang cá nhân", img:"https://i.pinimg.com/736x/90/d0/b8/90d0b8471b7d4aaf9c3f84ac5992e1b8.jpg" },
    { type: "Link", link: "/", name: "Xem thêm", icon: LogoMenu },
  ];
  return (
    <div className={clsx(style.wrapper)}>
      <Link to="/" className={clsx(style.logo)}>
        <Logo />
      </Link>
      {list.map((item, index) => {
        const Icon = item.icon;
        let Component = Link
        if(item.type==="Link"){
          Component = Link
        }
        return (
          <Link to={item.link} className={clsx(style.item)} key={index}>
            <div>
              {Icon && <Icon />}
              {item.img && <div className={clsx(style.img)}><img src={item.img} alt="Avatar"/></div>}
            </div>
            <p className={clsx(style.text)}>{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
