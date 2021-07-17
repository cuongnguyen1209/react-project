import { Link } from "react-router-dom";
import flight1 from '../img/flight1.jpg';
import flight2 from '../img/flight2.jpg';
import flight3 from '../img/flight3.jpg';
import flight4 from '../img/flight4.jpg';


export function Flight() {
    return (
        <div className="flight p-y">
            <div className="heading flight-heading">
                <div className="heading-left"><p>Find your next adventure with these <span>flight deals</span></p></div>
                <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
            </div>
            <div className="flight-content">
                <div className="flight-top">
                    <div className="flight-top-item item">
                        <img src={flight1} alt=""></img>
                        <div className="item-content">
                            <h6>
                                <div className="text-left">the bund, <span>shanghai</span></div>
                                <div className="text-right">$598</div>
                            </h6>
                            <p>China's most international city</p>
                        </div>
                    </div>
                    <div className="flight-top-item item">
                        <img src={flight2} alt=""></img>
                        <div className="item-content">
                            <h6>
                                <div className="text-left">Sydney Opera House, <span>Sydney</span></div>
                                <div className="text-right">$981</div>
                            </h6>
                            <p>Take a stroll along the famous harbor</p>
                        </div>
                    </div>
                    <div className="flight-top-item item">
                        <img src={flight3} alt=""></img>
                        <div className="item-content">
                            <h6>
                                <div className="text-left">Kōdaiji Temple, <span>Kyoto</span></div>
                                <div className="text-right">$633</div>    
                            </h6>
                            <p>Step back in time in the Gion district</p>
                        </div>
                    </div>
                </div>
                <div className="flight-bottom">
                    <div className="flight-bottom-item item">
                        <img src={flight4} alt=""/>
                        <div className="item-content">
                            <h6>
                                <div className="text-left">Tsavo East National Park, <span>Kenya</span></div>
                                <div className="text-right">$1,248</div>    
                            </h6>
                            <p>Named after the Tsavo River, and opened in April 1984, 
                                Tsavo East National Park is one of the oldest parks in Kenya. 
                                It is located in the semi-arid Taru Desert.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}