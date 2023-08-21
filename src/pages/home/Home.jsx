import TopBar from "../../components/topbar/TopBar"
import LeftBar from "../../components/leftbar/LeftBar"
import RightBar from "../../components/rightbar/RightBar"
import Feed from "../../components/feed/Feed"
import './Home.css'

export default function Home() {
  return (
    <>
        <TopBar/>
        <div className="mainContainer">
          <LeftBar/>
          <Feed/>
          <RightBar/>
        </div>
    </>
  )
}
