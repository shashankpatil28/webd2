import React, { useState } from 'react'
// import axios from 'axios'
import './Posts.css'
import {BsThreeDots, BsSuitHeartFill} from 'react-icons/bs'
import {BiSolidLike, BiSolidShareAlt} from 'react-icons/bi'
import {FaComments} from 'react-icons/fa'
// import {users} from '../../dummyData'



export default function Posts({post}) {
    var displa = {};
    var displa2 = {};
    function styleDisplay() {
       if( post.photo === "#"){
            displa = {
                display: "none"
            }
            displa2 = {
                fontSize: "1.5rem",
                letterSpacing: "1.2px",
                fontFamily : "san-serif"
            }
        } 
        else {
            displa = {
                display: "block"
            }
        }
        
    }
    styleDisplay();

    const [like, setLike] = useState(post.likes);
    const [isLiked,setIsLiked] = useState(false);
    function likeHandler() {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked);
    }


    var [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([]);
    // const [dateTime, setdateTime] = useState();
    // setdateTime(new Date().getFullYear);

    function clickHandlerComment() {
        if(comment === "") return null;
        setAllComments((allComments) => [...allComments, comment]);
        document.querySelectorAll('.WriteComment input').forEach((item) => {
            item.value = "";
        })
        
        setComment("");
    }

    // const [time , setTime] = useState("");
    // const stringTime = post.created_at;
    // console.log(stringTime.slice(11, 19));
    
    return (
    
    <div className="postsContainer">
        <div className="postWrappers">
            <div className="postUpper">
                <div className="postOfwhome">
                    {/* <img src={users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" /> */}
                    <img src={post.user.profile_image.small} alt="" />
                    <div className="postOfwhomeText">
                       
                        {/* <p className='postWhome'>{users.filter((u) => u.id === post.userId)[0].userName}</p> */}
                        <p className='postWhome'>{post.user.username}</p>
                        {/* <p>{post.Date}</p> */}
                        <p>{post.created_at.slice(11, 19)}</p>
                    </div>
                </div>
                <BsThreeDots className='threeDots'/>
            </div>

            <div className="postMiddle1">
                <p style = {displa2}>{post?.description}</p>
            </div>
            <div className="postMiddle2">
                <img src={post.urls.regular} alt="" style = {displa}/>
            </div>
            <div className="postLower">
                <div className="postLikeComment">
                    <div className="post1 postLike">
                        <BiSolidLike className='postIcons' onClick={likeHandler} />
                        <BsSuitHeartFill className='postIcons'  onClick={likeHandler} />
                        <p><span>{like}</span> Like</p>
                    </div>
                    <div className="post1 postcomments">
                        <FaComments className='postIcons'/>
                        <p><span>{(post.likes/10)}</span> Comments</p>
                    </div>
                </div>
                <div className="postShare">
                    <BiSolidShareAlt className='postIcons'/>
                    <p>Share</p>
                </div>
            </div>
            <div className="commentSection">
                <div className="commentSectionWrapper">
                    <div className="WriteComment">
                        <input type="text" placeholder='comment here..' onChange={(e) => setComment(e.target.value)}/>
                        <button onClick={clickHandlerComment}>Comment</button>
                    </div>
                    {allComments.map((item) => 
                            <div className="commentSeen">
                                 <img src="assets/profileImg1.jpg" alt="" />
                                <p className='mainComment'>{item}</p>
                                <p className='dateComment'>date-Time</p>
                            </div>
                    )}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

