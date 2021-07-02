import { Link } from "react-router-dom";
import flight1 from '../img/flight1.jpg';
import flight2 from '../img/flight2.jpg';
import flight3 from '../img/flight3.jpg';
import flight4 from '../img/flight4.jpg';


export function Flight() {
    return (
        <div className="flight">
            <div className="heading">
                <div className="heading-left"><p>Find your next adventure with these <span>flight deals</span></p></div>
                <div className="heading-right"><Link>All <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
            </div>
            <div className="flight-content">
                <div className="flight-top">
                    <div className="flight-top-item item">
                        <img src={flight1}></img>
                        <div className="item-content">
                            <h6>the bund, <span>shanghai</span><div>$598</div></h6>
                            <p>China's most international city</p>
                        </div>
                    </div>
                    <div className="flight-top-item item">
                        <img src={flight2}></img>
                        <div className="item-content">
                            <h6>Sydney Opera House, <span>Sydney</span>$598</h6>
                            <p>Take a stroll along the famous harbor</p>
                        </div>
                    </div>
                    <div className="flight-top-item item">
                        <img src={flight3}></img>
                        <div className="item-content">
                            <h6>Kōdaiji Temple, <span>Kyoto</span>$598</h6>
                            <p>Step back in time in the Gion district</p>
                        </div>
                    </div>
                </div>
                <div className="flight-bottom">
                    <div className="flight-bottom-item item">
                        <img src={flight4}></img>
                        <div className="item-content">
                            <h6>the bund, <span>shanghai</span>$598</h6>
                            <p>China's most international city</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}