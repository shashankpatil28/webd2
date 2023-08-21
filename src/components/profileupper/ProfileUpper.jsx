import React from 'react'
import './ProfileUpper.css'
import {BiEnvelope, BiDotsHorizontalRounded} from 'react-icons/bi'

export default function ProfileUpper() {
  return (
    <div class="mainProfile">
        <div class="mainProfileWrapper">
            <div class="mainProfileUpper">
                <img src="/assets/12.jpg" alt=""></img>
            </div>
            <div class="mainProfileLower">
                <div class="mainProfileWho">
                    <img src="/assets/profileImg1.jpg" alt=""></img>
                    <div class="mainProfileWhoData">
                        <p class="name">Shashank Patil</p>
                        <p class="email">abc@gmail.com</p>
                    </div>
                </div>
                <div class="mainProfileButtons">
                    <button>Add Friend</button>
                    <BiEnvelope className='envelope'/>
                    <BiDotsHorizontalRounded className='threeProfileDots'/>
                </div>
            </div>
        </div>
        <div class="mainProfileFrag">
            <div class="mainProfileFragWrapper">
                <p>About</p>
                <p>Membership</p>
                <p>Discussion</p>
                <p>Video</p>
                <p>Group</p>
                <p>Events</p>
                <p>Media</p>
            </div>
        </div>
    </div>
  )
}
