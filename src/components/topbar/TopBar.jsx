
import {FaSearch, FaHome, FaMoon} from 'react-icons/fa'
import {BsPersonFill, BsChatDotsFill} from 'react-icons/bs'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {GrNotification} from 'react-icons/gr'
import './TopBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { passData } from '../../passData'

export default function TopBar() {
    const [theme, setTheme] = useState("");

    function darkTheme() {
        if(theme === "dark"){
            setTheme("");
        }
        else{
            setTheme("dark");
        }
    } 
    function themeReset() {
        setTheme(theme);
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const [left, setLeft] = useState("");

    function leftbarHandler () {
        if(left === 'active'){
            setLeft("");
        }
        else{
            setLeft('active');
        }
        console.log(document.body.className)
    }

    useEffect(() => {
        document.body.className = left;
    }, [left]);
    
    const [searchTex, setSearchTex] = useState("");
    const searchPost = () => {
        // console.log(searchTex)
        passData.searchTe = searchTex;
        // console.log(passData.searchTe)
        document.querySelector('.topbarCenter input').value = "";
    }
    const searchText = (e) => {
        setSearchTex(e.target.value);
        // e.target.value = "";
    }

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <div className="logo">
                <img src="/assets/geekheven.png" alt="" />
                <span>LOGO</span>
            </div>
            <div className="hamBurger">
                <i class="fa-solid fa-bars" onClick={leftbarHandler}></i>
            </div>
        </div>

        <div className="topbarCenter">
            <div className="topbarSearch">                
                <input type="search" placeholder='seach anything' onChange={searchText}/>
                <FaSearch className='topbarSearchIcon' onClick={searchPost}/>
            </div>
            <div className="topbarToglleIcons">
                <Link className="linkIcons" to='/' onClick={themeReset}>
                    <FaHome className='Icons'/>
                </Link>
                <Link className="linkIcons" to='/search' onClick={themeReset}>
                    <BiSolidSearchAlt2 className='Icons'/>
                </Link>
                <Link className="linkIcons" to='/profile' onClick={themeReset}>
                    <BsPersonFill className='Icons'/>
                </Link>
                
            </div> 
        </div>

        <div className='topbarRight'>
            <div className="topbarComIcons">
                <GrNotification className='Icons noti'/>
                <BsChatDotsFill className='Icons chat'/>
                <FaMoon className='Icons' onClick={() => darkTheme()}/>
            </div>
            <div className="topbarProfileIcon">
                <img src="/assets/profileImg1.jpg" alt="" className='profileImg'/>
            </div>
        </div>
    </div>
  )
}
