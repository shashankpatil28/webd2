import React from "react";
import "./Post.css";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaBookmark,FaLocationArrow } from "react-icons/fa";
import ProfileImage from "../../assets/person/1.jpeg";


// import Comment from '../../img/comment.png'
// import Share from '../../img/share.png'
// import Heart from '../../img/like.png'
// import NotLike from '../../img/notlike.png'

const Post = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(data.likes);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);



  const handleToggleCommentSection = () => {
    setIsCommentSectionVisible(!isCommentSectionVisible);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };
  

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString(); // Get the current time
      const commentWithTime = `${newComment} ${currentTime}`;
      setComments([...comments, commentWithTime]);
      
      setNewComment("");
    }
  };
  return (
    <div className="Post">
      <div className="Posttopprofile">
        <div className="left">
          <img src={data.img} className="profileDp" alt="" />
          <div className="userinfo">
            <span className="username"> Akshay Waghmare </span>
            <span className="usercity"> Newyork, India</span>
          </div>
        </div>

        <div className="threedotIcon">
          <FaEllipsisH></FaEllipsisH>
        </div>
      </div>
      <img src={data.img} alt="" />

      <div className="postReact">
        <div className="PostleftIcons">
          <FaRegHeart
            onClick={handleLikeClick}
            className={isLiked ? "liked" : ""}
          />

          <FaRegCommentDots onClick={handleToggleCommentSection}></FaRegCommentDots>
          <FaShare></FaShare>
        </div>
        <div>
          <FaBookmark></FaBookmark>
        </div>
      </div>



      <div className="CommentSection">
        <div className="UserProfile">
          <div className="AccountProfilePic">
            <img src={ProfileImage} alt="" />

            <div className="Csearchbar">
              <input
                placeholder="Write your comment"
                className="CsearchInput" value={newComment}
                onChange={handleCommentChange}
              />
              <FaLocationArrow className="CommentIcon" onClick={handleCommentSubmit}></FaLocationArrow>


            </div>
          </div>
        </div>
        

        {comments.map((comment, index) => (
          <div className="ViewComment"  key={index} >
          <div className="CommentProfilePic">
              <img src={ProfileImage} alt="" />
  
             
            </div>
            <div className="Comment">
              <div className="CommentUserName">Akshay Waghamre<span>{comment.split(" ")[1]}</span></div>
              <span>{comment.split(" ")[0]}</span>
            </div>
            
          </div>
        ))}
        
        
      </div>
    
      

      <span style={{ color: "var(--gray)", fontSize: "13px" }}>
        Liked By <b className="nameBold">Shashank Patil</b> and{" "}
        <b className="nameBold">{likesCount}</b> Others
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post