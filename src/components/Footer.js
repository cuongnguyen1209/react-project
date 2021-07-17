import { Link } from "react-router-dom";
import appstore from '../img/appstore.jpg';
import googleplay from '../img/googleplay.jpg';

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="logo">
                    <p className="primary-color">Tripma</p>
                </div>
                <div className="footer-col">
                    <h6>About Tripma</h6>
                    <Link to="">How it works</Link>
                    <Link to="">Careers</Link>
                    <Link to="">Press</Link>
                    <Link to="">Blog</Link>
                    <Link to="">Forum</Link>
                </div>
                <div className="footer-col">
                    <h6>Partner with us</h6>
                    <Link to="">Partnership programs</Link>
                    <Link to="">Affiliate program</Link>
                    <Link to="">Connectivity partners</Link>
                    <Link to="">Promotions and events</Link>
                    <Link to="">Integrations</Link>
                    <Link to="">Community</Link>
                    <Link to="">Loyalty program</Link>
                </div>
                <div className="footer-col">
                    <h6>Support</h6>
                    <Link to="">Help Center</Link>
                    <Link to="">Contact us</Link>
                    <Link to="">Privacy policy</Link>
                    <Link to="">Terms of service</Link>
                    <Link to="">Trust and safety</Link>
                    <Link to="">Accessibility</Link>
                </div>
                <div className="footer-col">
                    <h6>Get the app</h6>
                    <Link to="">Tripma for Android</Link>
                    <Link to="">Tripma for iOS</Link>
                    <Link to="">Mobile site</Link>
                   <div><a href="https://www.apple.com/app-store/"><img src={appstore} alt=""/></a></div>
                   <div><a href="https://play.google.com/store"><img src={googleplay} alt=""/></a></div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="icon">
                    <Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link to=""><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
                </div>
                <div className="copy-right">
                    <p>© 2020 Tripma incorporated</p>
                </div>
            </div>
            
        </div>
    )
}