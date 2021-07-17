
import { useDispatch } from "react-redux";
import google from '../img/icons8-google.svg';
import { setOpenPopup } from "./store/OpenPopupSlice";

export function Popup() {
    const dispatch = useDispatch();
    return (
        <div className="popup">
            <div className="popup-content">
                <div className="popup-content-container">
                    <div className="popup-title">
                        <h3>Sign up for Tripma</h3>
                        <div className="close-popup-btn" onClick={()=>dispatch(setOpenPopup(false))}><i className="fa fa-times" aria-hidden="true"></i></div>
                    </div>
                    <p className="text">
                        Tripma is totally free to use. 
                        Sign up using your email address or phone number below to get started.
                    </p>
                    <div className="email">
                        <input placeholder=" "></input>
                        <label>Email or phone number</label>
                    </div>
                    <div className="password">
                        <input placeholder=" "></input>
                        <label>Password</label>
                    </div>
                    <div className="check">
                        <input type="checkbox"></input>
                        <label className="text">I agree to the <span>terms and conditions</span></label>
                    </div>
                    <div className="check">
                        <input type="checkbox"></input>
                        <label className="text">Send me the latest deal alerts</label>
                    </div>
                    <div className="create-btn">Create account</div>
                    <div className="divider">
                        <p></p>
                    </div>
                    <div className="connect-btn">
                        <div className="icon">
                            <img src={google} alt=""/>
                        </div>
                            <p className="label">Continue with Google</p>
                        </div>
                    <div className="connect-btn">
                        <div className="icon">
                            <i className="fa fa-apple" aria-hidden="true"></i>
                        </div>
                        <p>Continue with Apple</p>
                    </div>
                    <div className="connect-btn">
                        <div className="icon">
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <p>Continue with Facebook</p>
                    </div>    
                </div>            
            </div>
        </div>
    )
}