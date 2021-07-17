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
                    <Link>How it works</Link>
                    <Link>Careers</Link>
                    <Link>Press</Link>
                    <Link>Blog</Link>
                    <Link>Forum</Link>
                </div>
                <div className="footer-col">
                    <h6>Partner with us</h6>
                    <Link>Partnership programs</Link>
                    <Link>Affiliate program</Link>
                    <Link>Connectivity partners</Link>
                    <Link>Promotions and events</Link>
                    <Link>Integrations</Link>
                    <Link>Community</Link>
                    <Link>Loyalty program</Link>
                </div>
                <div className="footer-col">
                    <h6>Support</h6>
                    <Link>Help Center</Link>
                    <Link>Contact us</Link>
                    <Link>Privacy policy</Link>
                    <Link>Terms of service</Link>
                    <Link>Trust and safety</Link>
                    <Link>Accessibility</Link>
                </div>
                <div className="footer-col">
                    <h6>Get the app</h6>
                    <Link>Tripma for Android</Link>
                    <Link>Tripma for iOS</Link>
                    <Link>Mobile site</Link>
                   <div><a href="https://www.apple.com/app-store/"><img src={appstore}/></a></div>
                   <div><a href="https://play.google.com/store"><img src={googleplay}/></a></div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="icon">
                    <Link><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                </div>
                <div className="copy-right">
                    <p>© 2020 Tripma incorporated</p>
                </div>
            </div>
            
        </div>
    )
}