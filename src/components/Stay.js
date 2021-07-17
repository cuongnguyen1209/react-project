import { Link } from "react-router-dom";
import stay1 from '../img/stay1.jpg';
import stay2 from '../img/stay2.jpg';
import stay3 from '../img/stay3.jpg';

export function Stay() {
    return (
        <div className="stay p-y">
            <div className="heading stay-heading">
                <div className="heading-left"><p>Explore unique <span>places to stay</span></p></div>
                <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
            </div>
            <div className="stay-content">
                <div className="stay-item item">
                    <img src={stay1} alt=""/>
                    <div className="item-content">
                        <h6>Stay among the atolls in <span>Maldives</span></h6>
                        <p>
                            From the 2nd century AD, the islands were known as the 
                            'Money Isles' due to the abundance of cowry shells, a currency of the early ages.
                        </p>
                    </div>
                </div>
                <div className="stay-item item">
                    <img src={stay2} alt=""/>
                    <div className="item-content">
                        <h6>Experience the Ourika Valley in <span>Morocco</span></h6>
                        <p>
                            Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, 
                            and contemporary artistic currents in the Middle East.
                        </p>
                    </div>
                </div>
                <div className="stay-item item">
                    <img src={stay3} alt=""/>
                    <div className="item-content">
                        <h6>Live traditionally in <span>Mongolia</span></h6>
                        <p>
                            Traditional Mongolian yurts consists of an angled latticework 
                            of wood or bamboo for walls, ribs, and a wheel.
                        </p>
                    </div>
                </div>
            </div>
            <button className="btn">Explore more stays</button>
        </div>
    )
}