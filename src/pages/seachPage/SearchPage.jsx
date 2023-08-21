import './SearchPage.css'
import TopBar from "../../components/topbar/TopBar"
import LeftBar from "../../components/leftbar/LeftBar"
import SearchFrnd from '../../components/searchfriend/searchFrnd'

export default function SearchPage() {
  return (
    <>
        <TopBar/>
        <div className="mainContainer">
            <LeftBar/>   
            <SearchFrnd/>  
        </div>
    </>
  )
}
