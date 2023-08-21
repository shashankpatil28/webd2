import React from 'react'
import './ProfileLower.css'
import CreatePost from '../createpost/createpost'
import Posts from '../posts/Posts'
// import {postsDat} from '../../dummyData'
import {FiBriefcase} from 'react-icons/fi'
import {MdLocationOn} from 'react-icons/md'
import {HiAcademicCap} from 'react-icons/hi'
import {BiSolidHomeHeart} from 'react-icons/bi'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { passData } from '../../passData'


export default function ProfileLower() {

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
    <div className="profileLower">
          
          <div className="profileLowerLeft">
              <div class="introdSection">
                <div class="introSectionWrapper">
                    <div class="introUpper">
                        <p class="intro">Intro</p>
                        <p class="quote">Believe in yourselfend you can do unbeleivable things</p>
                    </div>
                    <div class="introLower">
                        <div class="introMainData">
                            <FiBriefcase className='introIcons'/>
                            <p>Work at Microsoft, Noida</p>
                        </div>
                        <div class="introMainData">
                            <HiAcademicCap className='introIcons'/>
                            <p>Graduated from IIIT, Allahabad</p>
                        </div>
                        <div class="introMainData">
                            <HiAcademicCap className='introIcons'/>
                            <p>Coaching from Vibrant, Kota</p>
                        </div>
                        <div class="introMainData">
                            <BiSolidHomeHeart className='introIcons'/>
                            <p>Home at Latur Maharashtra</p>
                        </div>
                        <div class="introMainData">
                            <MdLocationOn className='introIcons'/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="myPhotos">
                <div class="myPhotosWrapper">
                    <div class="mainPhotosUpper">
                        <p class="myphotopara">My Photos</p>
                        <p class="seeAll">See all</p>
                    </div>
                    <div class="mainPhotosContent">
                        <img src="assets/6.jpg" alt=""></img>
                        <img src="assets/4.jpg" alt=""></img>
                        <img src="assets/10.jpg" alt=""></img>
                        <img src="assets/12.jpg" alt=""></img>
                        <img src="assets/11.jpg" alt=""></img>
                        <img src="assets/5.jpg" alt=""></img>
                    </div>
                </div>
            </div>

            <div class="eventSection">
                <div class="eventSectionwrapper">
                    <div class="eventUpper">
                        <p class="eventPara">Events</p>
                        <p class="seeAll">See all</p>
                    </div>
                    <div class="eventMainContent">
                        
                        <div class="eventMainData">
                            <div class="eventDate">
                                <p>APR 13</p>
                            </div>
                            <div class="evetnDesc">
                                <p class="eventDescp1">Meeting with Client</p>
                                <p class="eventDescp2">41 midson ave, floor 24, NY 10010</p>
                            </div> 
                        </div>
                        <div class="eventMainData">
                            <div class="eventDate">
                                <p>APR 13</p>
                            </div>
                            <div class="evetnDesc">
                                <p class="eventDescp1">Meeting with Client</p>
                                <p class="eventDescp2">41 midson ave, floor 24, NY 10010</p>
                            </div> 
                        </div>
                        <div class="eventMainData">
                            <div class="eventDate">
                                <p>APR 13</p>
                            </div>
                            <div class="evetnDesc">
                                <p class="eventDescp1">Meeting with Client</p>
                                <p class="eventDescp2">41 midson ave, floor 24, NY 10010</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="profileLowerRight">
              <CreatePost />
              {isError !== "" && <h2>{isError}</h2>}
              {myData.map((p) => 
                  <Posts key = {p.id} post = {p}/>
              )}
          </div>
    </div>
    
  )
}
