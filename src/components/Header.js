
import { setOpenPopup } from "./store/OpenPopupSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {
    const dispatch = useDispatch();

    return(
        <div className="header">
            <div className="logo">
                <p><Link to='/'>Tripma</Link></p>
            </div>

            <div className="header-nav">
                <div className="nav-item">Flights</div>
                <div className="nav-item">Hotels</div>
                <div className="nav-item">Packages</div>
                <div className="nav-item">Sign in</div>
                <div className="singup-btn"><button onClick={()=>dispatch(setOpenPopup(true))}>Sign up</button></div>
            </div>
        </div>
    )
}