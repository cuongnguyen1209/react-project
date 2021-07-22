import { Link } from "react-router-dom";
import stay4 from '../img/stay4.jpg';
import stay5 from '../img/stay5.jpg';
import stay6 from '../img/stay6.jpg';
import flight1 from '../img/flight1.jpg';
import flight5 from '../img/flight5.jpg';
import flight6 from '../img/flight6.jpg';
import map from '../img/map1.jpg';
import { Mychart } from "./Chart";
import { Weather } from "./Weather";
import { SelectInput } from "./SelectInput";
import { useDispatch, useSelector } from "react-redux";
import logo from '../img/logo-1.png';
import { getCostValue } from "./store/FlightSearchSlice";


export function FlightSearchResult() {
    const place = [
        {
            img: stay4,
            title: "Hotel Kaneyamaen and Bessho SASA",
            content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
        },
        {
            img: stay5,
            title: "HOTEL THE FLAG 大阪市",
            content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
        },
        {
            img: stay6,
            title: "Hotel Kaneyamaen and Bessho SASA",
            content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
        },

    ];

    const SearchFor = [
        {
            img: flight1,
            city: "Shanghai",
            country: "China",
            price: "$598",
            content: "An international city rich in culture",
        },
        {
            img: flight5,
            city: "Nairobi",
            country: "Kenya",
            price: "$1,248",
            content: "Dubbed the Safari Capital of the World",
        },
        {
            img: flight6,
            city: "Seoul",
            country: "South Korea",
            price: "$589",
            content: "This modern city is a traveler’s dream",
        },
    ];

    const time = [Math.floor(Math.random()*12) + "h",
                 "15h 30m"
                ];

    const departure = useSelector((state)=>state.flightSearch.depatureValue);
    const arrival = useSelector((state)=>state.flightSearch.arrivalValue);


    function distance(lat1, lon1, lat2, lon2) {
        const p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
        return 12742 * Math.asin(Math.sqrt(a));
    }
    
    const distanceValue = Math.round(distance(departure.lat, departure.long, arrival.lat, arrival.long)).toFixed();
    const hours = <p>{distanceValue === "NaN" ? "" : (distanceValue/560 >=1 ? Math.floor(distanceValue/560) + " h" : Math.floor(distanceValue/560*60) + " min")}</p>
    
    const seatValue = useSelector((state)=>state.flightSearch.adultsCount) + useSelector((state)=>state.flightSearch.minorsCount);
    const cost = distanceValue*1500;
    const costValue = useSelector((state)=>state.flightSearch.costValue);
    const dispatch = useDispatch();

    const myCartElement = 
    <div className="cart">
        <div className="departure-flight custom">
            <div className="start">
                <div className="logo"><img src={logo} alt=""/></div>
                <div className="content">
                    <p>Vietnam Airlines</p>
                </div>
            </div>
            <div className="col">
                <p>9h 45m</p>
            </div>
        </div>
        <div className="ticket">
            <div className="ticket-content">
                <p>Cost</p>
                <p>{costValue} Vnd</p>
            </div>
            <div className="ticket-content">
                <p>Seat</p>
                <p>{seatValue}</p>
            </div>
            <div className="ticket-content">
                <p>Total</p>
                <p>{costValue*seatValue} Vnd</p>
            </div>
        </div>
        <div className="btn-group">
            <button className="cancel">Cancel</button>
            <button className="save"><Link to="/flight-summary">Save and Close</Link></button>
        </div>
    </div>

    
    return (
        <>
            <div className="wrapper">
                <div className="col-left">
                    <div className="result-wrapper">
                        <SelectInput />
                    </div>
                </div>
                <div className="col-right">
                    <Weather />
                </div>
            </div>
            
            {distanceValue > 0 ? 
                <div className="wrapper">
                <div className="col-left">
                    <div className="flight-info">
                        <h5>Choose a <span className="primary-color">departing</span> flight</h5>
                        {typeof departure === "object" && typeof arrival === "object" &&
                            <div className="flight-info-title">
                                <p>{departure.value} ({departure.label})</p>
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <p>{arrival.value} ({arrival.label})</p>
                            </div>
                        }
                        <div className="departure-flight-wrapper">
                            <div className="departure-flight" onClick={()=>{dispatch(getCostValue(cost))}}>
                                <div className="start">
                                    <div className="logo"><img src={logo} alt=""/></div>
                                    <div className="content">
                                        <p>{time[0]}</p>
                                        <p>Vietnam Airlines</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>{distanceValue === "NaN" ? "" : distanceValue + " Km"}</p>
                                    <p>Distance</p>
                                </div>
                                <div className="col">
                                    {hours}
                                    <p>Duration Of Flight</p>
                                </div>
                                <div className="col">
                                    <p>{distanceValue === "NaN" ? "" : cost + " Vnd" }</p>
                                    <p>Cost</p>
                                </div>
                            </div>
                            <div className="departure-flight" onClick={()=>{dispatch(getCostValue(cost))}}>
                                <div className="start">
                                    <div className="logo"><img src={logo} alt=""/></div>
                                    <div className="content">
                                        <p value={123}>{time[1]}</p>
                                        <p>Vietnam Airlines</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <p>{distanceValue === "NaN" ? "" : distanceValue + " Km"}</p>
                                    <p>Distance</p>
                                </div>
                                <div className="col">
                                    {hours}
                                    <p>Duration Of Flight</p>
                                </div>
                                <div className="col">
                                    <p>{distanceValue === "NaN" ? "" : cost + " Vnd" }</p>
                                    <p>Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-right">
                    {costValue > 0 ? myCartElement : <Mychart />}
                </div>
            </div>
            : <p className="warn"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Vui lòng chọn chuyến bay phù hợp</p>
            }

            
            <div className="wrapper">
                <div className="col-left">
                    <div className="map-img">
                        <img src={map} alt=""/>
                    </div>
                </div>
                <div className="col-right">
                    <div className="price-rating">
                        <div className="heading">
                            <h4>Price rating</h4>
                            <p><span>Buy soon</span></p>
                        </div>
                        <div className="content">
                            <p>
                                We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
                            </p>
                            <p>
                                Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

           {distanceValue > 0 && 
             <div className="stay p-y">
                <div className="heading stay-heading">
                    <div className="heading-left"><p>Find <span className="primary-color">places to stay</span> in {arrival.city}</p></div>
                    <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>
                <div className="stay-content">
                    {place.map((item, index)=>
                        <div className="stay-item item" key={index}>
                            <img src={item.img} alt=""/>
                            <div className="item-content">
                                <h6 className="primary-color">{item.title}</h6>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
           }

            {distanceValue > 0 && 
                <div className="flight p-y">
                    <div className="heading flight-heading">
                        <div className="heading-left"><p>People in <span>{departure.city}</span> also searched for</p></div>
                        <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                    </div>
                    <div className="flight-top">
                    {SearchFor.map((item, index)=>
                            <div className="flight-top-item item" key={index}>
                                <img src={item.img} alt=""></img>
                                <div className="item-content">
                                    <h6>
                                        <div className="text-left">{item.city}, <span>{item.country}</span></div>
                                        <div className="text-right">{item.price}</div>
                                    </h6>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                    )}
                    </div>
                    </div>
            }
                    

        </>
    )
}