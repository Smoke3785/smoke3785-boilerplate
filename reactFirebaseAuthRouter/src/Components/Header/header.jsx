import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";

const Header =()=> {
    const [scrollStyle, setScrollStyle] = useState('unscrolled');

    useEffect(()=>{
        if (!typeof window) return
        window.onscroll =()=> {
            let currentScrollPos = window.pageYOffset;
            let maxScroll = document.body.scrollHeight - window.innerHeight;
            if (currentScrollPos > 0 && currentScrollPos < maxScroll + 1) {
              setScrollStyle('scrolled')
            } else {
              setScrollStyle('unscrolled')
            }
        }
    },[])
    return (
        <div className={`iliadHeaderBoiler ${scrollStyle}`}>
            <div className="branding">
                <div style={{
                    backgroundImage: 'url("https://cdn.discordapp.com/attachments/771585400614420482/842121782021586964/Logo_1.png")'
                }} className="logo">
                    
                </div>
            </div>
            <div className="navLinks">
                <NavLink activeStyle={{textDecoration: 'underline'}} exact to="/">HOME</NavLink>
                <NavLink activeStyle={{textDecoration: 'underline'}} to="/about">ABOUT</NavLink>
                <NavLink activeStyle={{textDecoration: 'underline'}} to='/content'>CONTENT</NavLink>
                <NavLink activeStyle={{textDecoration: 'underline'}} to="/contact">CONTACT</NavLink>
            </div>
        </div>
    )
}
export default Header;