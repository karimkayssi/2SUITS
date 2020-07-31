import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';

const SignedOutLinks = (props) => {
    return (
       <ul className="right">
           {/* <li><NavLink to='/'>Sign Up</NavLink></li>
           <li><NavLink to='/'>Login</NavLink></li> */}
       </ul>
        )
}

export default SignedOutLinks; 

//withRouter(Navbar);