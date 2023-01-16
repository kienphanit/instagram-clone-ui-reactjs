import Sidebar from "./components/Header/Sidebar";

const Layout = ({children}) => {
  return ( 
    <div className="container">
      <Sidebar/>
      <div className="content">{children}</div>
    </div>
   );
}
 
export default Layout;