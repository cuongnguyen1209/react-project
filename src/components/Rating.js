import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import star1 from '../img/star1.jpg';
import star2 from '../img/star2.jpg';

export function Rating() {
    return (
        <div className="rating p-y">
            <h3>What <span>Tripma</span> users are saying</h3>
            <div className="rating-content">
                <div className="rating-item">
                    <div className="item-avatar">
                        <img src={avatar1}/>
                    </div>
                    <div className="rating-info">
                        <p className="name">Yifei Chen</p>
                        <p className="info">Seoul, South Korea | April 2019</p>
                        <div className="star">
                            <img src={star1}/><img src={star1}/><img src={star1}/><img src={star1}/><img src={star1}/>
                        </div>
                        <p className="comment">
                            What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. 
                            When I had to cancel a flight because of an emergency, Tripma support helped me read more...
                        </p>
                        
                    </div>
                </div>
                <div className="rating-item">
                    <div className="item-avatar">
                        <img src={avatar2}/>
                    </div>
                    <div className="rating-info">
                        <p className="name">Kaori Yamaguchi</p>
                        <p className="info">Honolulu, Hawaii | February 2017</p>
                        <div className="star">
                            <img src={star1}/><img src={star1}/><img src={star1}/><img src={star1}/><img src={star2}/>
                        </div>
                        <p className="comment">
                            My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, 
                            and I’m so glad we tried it out! The process was easy and read more...
                        </p>
                        
                    </div>
                </div>
                <div className="rating-item">
                    <div className="item-avatar">
                        <img src={avatar3}/>
                    </div>
                    <div className="rating-info">
                        <p className="name">Anthony Lewis</p>
                        <p className="info">Berlin, Germany | April 2019</p>
                        <div className="star">
                            <img src={star1}/><img src={star1}/><img src={star1}/><img src={star1}/><img src={star1}/>
                        </div>
                        <p className="comment">
                            When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, 
                            but I’d definitely recommend it to a friend and use it for read more...
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}