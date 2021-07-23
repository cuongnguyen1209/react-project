import { setOpenPopup } from "./store/OpenPopupSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const dispatch = useDispatch();
    const [openmenu, setOpenMenu] = useState(false);

    return(
        <div className="header">
            <div className="logo">
                <p><Link to='/'>Tripma</Link></p>
            </div>

            <div className="header-nav">
                <div className="nav-item"><Link to='/flight-search'>Flights</Link></div>
                <div className="nav-item">Hotels</div>
                <div className="nav-item">Packages</div>
                <div className="nav-item">Sign in</div>
                <div className="singup-btn"><button onClick={()=>dispatch(setOpenPopup(true))}>Sign up</button></div>
            </div>

            <div id="toggle-button" onClick={() => setOpenMenu(true)}><i className="fa fa-bars" aria-hidden="true"></i></div>

            {openmenu === true && <div id="mobile-menu">
                <button className="mobile_close" onClick={() => setOpenMenu(false)}>x</button>
                <div className="mobile-menu-content">
                    <div className="nav-item"><Link to='/flight-search'>Flights</Link></div>
                    <div className="nav-item">Hotels</div>
                    <div className="nav-item">Packages</div>
                    <div className="nav-item">Sign in</div>
                    <div className="nav-item" onClick={()=>dispatch(setOpenPopup(true))}>Sign up</div>
                </div>
            </div>}
        </div>
    )
}