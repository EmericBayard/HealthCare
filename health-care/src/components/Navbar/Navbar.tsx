import React from 'react';
import '../../core-ui/Navbar.css';
import Logo from '../../assets/img/logo_comp.svg';
import { Pivot as Hamburger } from 'hamburger-react';

// const breakPointSmall = 576;
// const breakPointMedium = 768;
// const breakPointLarge = 992;
const breakPointSuperLarge = 768;


function Navbar() {
    /* State for hamburger icon*/
    const [isOpen, setOpen] = React.useState(false);
    /* State for width screensize */
    const [width, setWidth] = React.useState(window.innerWidth);

    const menuOpen = (b:boolean) => {
        if(b) {
            return ( 
            <div>
                <menu className = "DropdownMenu">
                    <li>Home</li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Reviews</li>
                    <li>Blog</li>
                    <button className="ButtonDropdown">Sign in</button>
                </menu>
            </div>
            )
        } else {
            return 
        }
    }
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
       if (width > breakPointSuperLarge) {
         return (
            <div className="Navbar">
                <img className="Logo" src={Logo} alt="health care logo"/>
                <menu className="Menu">
                    <li>Home</li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Reviews</li>
                    <li>Blog</li>
                </menu> 
                <button className="Button" >Sign in</button>
            </div>
         );
       }
  return (
    <div className="Navbar">
        <img className={!isOpen ? 'Logo' : 'Logo'} src={Logo} alt="health care logo"/>
        
        <div className="Hamburger">
            <Hamburger  color="#0C6AF6" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
            }}/>
        </div>
        {menuOpen(isOpen)}
    </div>
  );
}

export default Navbar;
