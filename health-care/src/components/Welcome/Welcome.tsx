import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../core-ui/Welcome.css';
import Navbar from '../Navbar/Navbar';

function Welcome() {
  return (
        <div className="Welcome">
            <Navbar />
            <div className="WelcomeContent">
                <h4 className="HigherText"><div> STAY STRONG</div>, LIVE LONG.</h4>
                <h2> Take care of your body and it will take care of <div>you.</div></h2>
                <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</h3>
                <div>
                    <button className="ButtonFull">Get appointment</button>
                    <button className="">View Profile</button>
                </div>
            </div>
        </div>
  )
}

export default Welcome;
