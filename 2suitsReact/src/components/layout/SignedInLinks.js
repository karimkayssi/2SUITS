import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import Avatar from '../../avatar.png';

const SignedInLinks = (props) => {
    return (
       <ul className="right">
           <li><NavLink to='/'>Profile</NavLink></li>
           <li><NavLink to='/'>Dashboard</NavLink></li>
           <li><NavLink to='/'>My Matches</NavLink></li>
           <li><NavLink to='/'>Wallet</NavLink></li>
           <li><NavLink to='/'>About Us</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className='collection-item avatar circle'>
               <img src={Avatar} alt="" height="30" />
           </NavLink></li>

       </ul>
        )
}

export default SignedInLinks; 

//withRouter(Navbar);