import {useState, useEffect} from 'react';
import "./Nav.css";

function Nav ()  {
 
   
    useEffect(() => {
        // window.addEventListener("scroll",()=>{
        //     if(window.scroll>100){
        //         handleShow(true)
        //     }
        // })
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, []);


    return (
        <div className="nav">
            <img
            className="nav__logo"src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"></img> 
             

             <img className='nav_avatar'
             src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
            
        </div>
    );
}

export default Nav;
