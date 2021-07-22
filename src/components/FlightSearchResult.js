import { Link } from "react-router-dom";
import map from '../img/map1.jpg';
import { Mychart } from "./Chart";
import { Weather } from "./Weather";
import { SelectInput } from "./SelectInput";
import { useDispatch, useSelector } from "react-redux";
import logo from '../img/logo-1.png';
import { getCostValue, getTimeValue } from "./store/FlightSearchSlice";
import { place } from "../data/data";
import { SearchFor } from "../data/data";
import { flightData } from "../data/data";
import { getDistanceValue } from './store/FlightSearchSlice';


export function FlightSearchResult() {

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
    const hours = distanceValue === "NaN" ? "" : (distanceValue/560 >=1 ? Math.floor(distanceValue/560) + " h" : Math.floor(distanceValue/560*60) + " min");
    const seatValue = useSelector((state)=>state.flightSearch.adultsCount) + useSelector((state)=>state.flightSearch.minorsCount);
    const cost = distanceValue*1500;
    const costValue = useSelector((state)=>state.flightSearch.costValue);
    const timeValue = useSelector((state)=>state.flightSearch.timeValue);
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
                <p>{timeValue}</p>
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

                            {flightData.map((item, index)=>
                                <div className="departure-flight" key={index} 
                                    onClick={()=>{
                                            dispatch(getTimeValue(item.time))
                                            dispatch(getCostValue(cost))
                                            dispatch(getDistanceValue(distanceValue))
                                        }}>
                                    <div className="start">
                                        <div className="logo"><img src={item.img} alt=""/></div>
                                        <div className="col">
                                            <p id="time">{item.time}</p>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p>{distanceValue === "NaN" ? "" : distanceValue + " Km"}</p>
                                        <p>{item.title_1}</p>
                                    </div>
                                    <div className="col">
                                        <p>{hours}</p>
                                        <p>{item.title_2}</p>
                                    </div>
                                    <div className="col">
                                        <p>{distanceValue === "NaN" ? "" : cost + " Vnd" }</p>
                                        <p>{item.title_3}</p>
                                    </div>
                                </div>
                            )}

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