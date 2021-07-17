
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
    ]


    return (
        <>
            <div className="wrapper">
                <div className="col-left">
                    input
                </div>
                <div className="col-right">
                    thời tiết
                    <Weather />
                </div>
            </div>
            <div className="wrapper">
                <div className="col-left">
                    chuyen bay
                </div>
                <div className="col-right">
                    <Mychart />
                </div>
            </div>
            <div className="wrapper">
                <div className="col-left">
                    <div className="map-img">
                        <img src={map}/>
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

            <div className="stay p-y">
                <div className="heading stay-heading">
                    <div className="heading-left"><p>Find <span className="primary-color">places to stay</span> in Japan</p></div>
                    <div className="heading-right"><Link>All <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>
                <div className="stay-content">
                    {place.map((item, index)=>
                        <div className="stay-item item" key={index}>
                            <img src={item.img}/>
                            <div className="item-content">
                                <h6 className="primary-color">{item.title}</h6>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flight p-y">
                <div className="heading flight-heading">
                    <div className="heading-left"><p>People in <span>San Francisco</span> also searched for</p></div>
                    <div className="heading-right"><Link>All <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>
                <div className="flight-top">
                   {SearchFor.map((item)=>
                        <div className="flight-top-item item">
                            <img src={item.img}></img>
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
                    

        </>
    )
}