import Content from "./component/Content";
import NavBar from "./component/NavBar";
import SideBar from "./component/Side/SideBar";

export default function App() {
  return (
    <div>
      <SideBar/>
      <NavBar />
      <Content />
      {/* <BottomBar /> */}
    </div>
  )
}