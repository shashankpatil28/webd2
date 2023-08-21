import React from 'react'
import './CreatePost.css'
import {PiPencilLineFill} from 'react-icons/pi'
import {FiVideo} from 'react-icons/fi'
import {GrGallery, GrCamera} from 'react-icons/gr'


export default function createpost() {
  return (
    <div className="createPostMain">
        <div className='createPostWrapper'>
            <div className="CreatePostupper">
                <PiPencilLineFill className='Icons upperIcon'/>
                <p>Create post</p>
            </div>
            <div className="CreatePostMiddle">
                <img src="/assets/profileImg1.jpg" alt="" className='profileImg CreatPostImg'/>
                <textarea id="textArea" cols="30" rows="10" placeholder='whats in ur mind'></textarea>  
            </div>
            <div className="CreatePostLower">
                <div className='lowermain'>
                    <div className="lowerContent">
                        <FiVideo className='createPostIcons'/>
                        <p className='videoICon'>Live video</p>
                    </div>
                    <div className="lowerContent">
                        <GrGallery className='createPostIcons'/>
                        <p className='galleryIcons'>Photoes / Video</p>
                    </div>
                    <div className="lowerContent">
                        <GrCamera className='createPostIcons'/>
                        <p className='cameraIcons'>Feeling/Activity</p>
                    </div>
                </div>
                <div className='submitPost'>
                    <button>Post</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}
