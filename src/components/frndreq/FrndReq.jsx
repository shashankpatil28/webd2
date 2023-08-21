import React from 'react'
import './FrndReq.css'

export default function FrndReq() {
  return (
    <div className="frndreq">
        <div className="frndreqwrapper">
            <div className="frndrequpper">
                <p>Friend Request</p>
                <p className='seeAll'>See all</p>
            </div>
            <div className="frdnreqMainContent">
                <div className="frndReqData">
                    <div className="postOfwhome">
                        <img src="/assets/profileImg1.jpg" alt="" />
                        <div className="postOfwhomeText">
                            <p className='postWhome'>Shashnk Patil</p>
                            <p>22 mutual friends</p>
                        </div>
                    </div>
                    <div className="frnreqbuttons">
                        <button className='first'>Confirm</button>
                        <button className='second'>Delet</button>
                    </div>
                </div>
                <div className="frndReqData">
                    <div className="postOfwhome">
                        <img src="/assets/profileImg1.jpg" alt="" />
                        <div className="postOfwhomeText">
                            <p className='postWhome'>Shashnk Patil</p>
                            <p>22 mutual friends</p>
                        </div>
                    </div>
                    <div className="frnreqbuttons">
                        <button className='first'>Confirm</button>
                        <button className='second'>Delet</button>
                    </div>
                </div>
                <div className="frndReqData">
                    <div className="postOfwhome">
                        <img src="/assets/profileImg1.jpg" alt="" />
                        <div className="postOfwhomeText">
                            <p className='postWhome'>Shashnk Patil</p>
                            <p>22 mutual friends</p>
                        </div>
                    </div>
                    <div className="frnreqbuttons">
                        <button className='first'>Confirm</button>
                        <button className='second'>Delet</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
