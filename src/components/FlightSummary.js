import { useSelector } from "react-redux";
import creditcard from '../img/creditcard.jpg';
import map from '../img/map2.jpg';
import { hotel } from "../data/data";
import { exper } from "../data/data";



export  function FlightSummary() {
    const arrival = useSelector((state)=>state.flightSearch.arrivalValue.city);
    console.log(hotel);
    return (
        <div className="flight-summary-container p-y">
            <div className="flight-summary-content">
                <div className="content-left">
                    <div className="notification">
                        <p>Your flight has been booked successfully!</p>
                        <p>Thank you for booking your travel with Tripma! 
                            Below is a summary of your trip to <span>{arrival}</span> We’ve sent a copy of your booking confirmation to your email address. 
                            You can also find this page again in My trips.</p>
                    </div>
                    <div className="summary">
                        <h3>Flight summary</h3>
                        <h4>Departing February 25th, 2021</h4>
                       
                    </div>
                    <div className="payment">
                        <h3>Payment method</h3>
                        <div>
                            <img src={creditcard} alt=""/>
                        </div>
                    </div>
                    <div className="input-group">
                        <h3>Share your travel itinerary</h3>
                        <p>You can email your itinerary to anyone by entering their email address here.</p>
                        <form>
                            <input placeholder="Email address"></input>
                            <input placeholder="Email address"></input>
                            <input placeholder="Email address"></input>
                        </form>
                        <div className="sudmit-btn-group">
                            <button>Email itinerary</button>
                            <button>Add another</button>
                        </div>
                    </div>
                    <div className="flightroute">
                        <h3>Flight Route</h3>
                        <img src={map} alt=""/>
                    </div>
                </div>
                <div className="content-right">
                    <div className="hotel">
                        <h3>Shop <span>hotels</span></h3>
                        <p>
                            Tripma partners with thousands of hotels to get you the best deal. 
                            Save up to 30% when you add a hotel to your trip.
                        </p>
                        <div className="stay-cotent">
                            {hotel.map((item, index)=>
                                <div className="stay-item item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="item-content">
                                        <h6>{item.title}<span>{item.price}</span></h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="all">Shop all hotels</button>
                    </div>

                    <div className="hotel">
                        <h3>Find unique <span>experiences</span></h3>
                        <p>
                            Find events and authentic cultrual experiences available exclusively to Tripma users.
                        </p>
                        <div className="stay-cotent">
                            {exper.map((item, index)=>
                                <div className="stay-item item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="item-content">
                                        <h6>{item.title}<span>{item.price}</span></h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="all">View all experiences</button>
                    </div>
                </div>
            </div>
        </div>
    )
}