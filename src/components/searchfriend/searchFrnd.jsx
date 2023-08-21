import './searchFrnd.css'
import FrndData from '../frnddata/frndData'
import { FaSearch } from 'react-icons/fa'
import  {users, frndDat} from '../../dummyData'
import { useState } from 'react'

export default function SearchFrnd() {
  const [search, setSearch] = useState("");
  // console.log(search)
  return (
    <div className="searchFrnd">
        <div className="searchFrndUpper">
            <p>Member</p>
            <div className="seachFeature">
                <input type="search" placeholder='search frnd..'
                onChange={(e) => setSearch(e.target.value)}/>
                <FaSearch className='searchFrndIcon'/>
            </div>
        </div>
        <div className="seachFrndLower">
            {frndDat.filter((item) => 
              search.toLocaleLowerCase() === "" ? item 
              :
              (item.first_name.toLocaleLowerCase().includes(search) || 
              item.last_name.toLocaleLowerCase().includes(search))
            )
            .map((user) => <FrndData key={users.id} user={user}/>) }
        </div>
    </div>
  )
}
