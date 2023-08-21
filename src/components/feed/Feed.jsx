import React, {  useState, useEffect} from 'react'
import './Feed.css'
import CreatePost from '../createpost/createpost'
import Posts from '../posts/Posts'
// import {postsDat} from '../../dummyData'
import axios from 'axios'
import { passData } from '../../passData'

export default function Feed() {
  const[DisplayPost,setDisplayPost] = useState(3);
      function LoadMorePost() {
      setDisplayPost(DisplayPost + 5);
  }

    const searchOption = passData.searchTe;
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${searchOption}&client_id=8mvbLTgd_uzB9KmY-pQynqAQ3_keeTpr4PiwNk07W98`
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    const MyPostData = async () => {
        try {
          const res = await axios.get(URL);
          // console.log(res.data);
          setMyData(res.data.results);
        } catch (error) {
          setIsError(error.message);
        }
        // console.log(myData)
    };

    useEffect(() => {
        MyPostData();
    });


  return (
    <div className="feed">
       <CreatePost />
       {isError !== "" && <h2>{isError}</h2>}
       {myData.slice(0,DisplayPost).map((p) => 
          <Posts key = {p.id} post = {p}/>
       )}

            <div className="MoreButton">
            {DisplayPost < myData.length && ( <button onClick={LoadMorePost}>click for more</button>)}
                {/* // <button onClick={LoadMorePost}>click for more</button> */}
            </div>
       
    </div>
  )
}

