import React from 'react'
import './TodayNews.css'

export default function TodayNews() {
  return (
    <div className="todaynews">
        <div className="todaynewsWrapper">
            <div className="todaysnewsUpper">
                <p>Todays News</p>
            </div>
            <div className="todaynewsMainContent">
                <div className="todaynewsMainData">
                    <p className='News'>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit.!
                    </p>
                    <p className='newsTime'>2 Hr</p>
                </div>
                <div className="todaynewsMainData">
                    <p className='News'>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Esse vitae l!
                    </p>
                    <p className='newsTime'>2 Hr</p>
                </div>
                <div className="todaynewsMainData">
                    <p className='News'>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Esse vitae laboriosam eius!
                    </p>
                    <p className='newsTime'>2 Hr</p>
                </div>
                <div className="todaynewsMainData">
                    <p className='News'>Lorem, ipsum dolor sit amet consectetur 
                        ad!
                    </p>
                    <p className='newsTime'>2 Hr</p>
                </div>
                <div className="todaynewsMainData">
                    <p className='News'>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit.   
                    </p>
                    <p className='newsTime'>2 Hr</p>
                </div>
            </div>
        </div>
    </div>
  )
}
