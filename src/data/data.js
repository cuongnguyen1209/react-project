import hotel1 from  '../img/hotel1.jpg';
import hotel2 from  '../img/hotel2.jpg';
import hotel3 from  '../img/stay5.jpg';
import hotel4 from  '../img/stay6.jpg';
import exper1 from '../img/exper1.jpg';
import exper2 from '../img/exper2.jpg';
import stay4 from '../img/stay4.jpg';
import stay5 from '../img/stay5.jpg';
import stay6 from '../img/stay6.jpg';
import flight1 from '../img/flight1.jpg';
import flight5 from '../img/flight5.jpg';
import flight6 from '../img/flight6.jpg';
import logo from '../img/logo-1.png';

export const hotel = [
    {
        img: hotel1,
        title: "Ryokan Japan",
        price: "$439",
        content: "Enjoy views of the garden from your room",
    },
    {
        img: hotel2,
        title: "Bessho SASA",
        price: "$529",
        content: "Japanese ryokan with private onsen bath",
    },
    {
        img: hotel3,
        title: "HOTEL THE FLAG 大阪市",
        price: "$139",
        content: "Modern hotel in the heart of Osaka",
    },
    {
        img: hotel4,
        title: "9 Hours Shinjuku",
        price: "$59",
        content: "A convenient capsule hotel at Shinjuku station",
    },
];

export const exper = [
    {
        img: exper1,
        title: "Nihon Kimono",
        price: "$89",
        content: "Wear the national dress of Japan around the city",
    },
    {
        img: exper2,
        title: "teamLab Borderless",
        price: "$39",
        content: "A modern sensory experience of light and sound",
    },
]

export const place = [
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


export const SearchFor = [
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

export const chartData = [
    // { month: "Jan", price: Math.floor(Math.random()*750)+250 },
    { month: "Feb", price: Math.floor(Math.random()*100)+50},
    { month: "Mar", price: Math.floor(Math.random()*100)+50},
    { month: "Apr", price: Math.floor(Math.random()*100)+50},
    { month: "May", price: Math.floor(Math.random()*100)+50},
    { month: "Jun", price: Math.floor(Math.random()*100)+50},
    { month: "Jul", price: Math.floor(Math.random()*100)+50},
    // { month: "Aug", price: Math.floor(Math.random()*750)+250},
    // { month: "Sep", price: Math.floor(Math.random()*750)+250},
    // { month: "Oct", price: Math.floor(Math.random()*750)+250},
    // { month: "Nov", price: Math.floor(Math.random()*750)+250},
    // { month: "Dec", price: Math.floor(Math.random()*750)+250},
  ];


  export const myArr = [
    { value: 'Nội Bài',label: 'HAN', city:"Hà Nội", lat: 21.2, long: 105.8},
    { value: 'Tân Sơn Nhất', label: 'SGN', city:"Hồ Chí Minh", lat: 10.8, long: 106.7},
    { value: 'Cam Ranh', label: 'CXR', city:"Nha Trang", lat: 12, long: 109},
  ];


export const flightData = [
    {
        img: logo,
        time: "8h",
        name: "Vietnam Airlines",
        title_1: "Distance",
        title_2: "Duration of Flight",
        title_3: "Cost",
    },
    {
        img: logo,
        time: "14h",
        name: "Vietnam Airlines",
        title_1: "Distance",
        title_2: "Duration of Flight",
        title_3: "Cost",
    },
    {
        img: logo,
        time: "18h",
        name: "Vietnam Airlines",
        title_1: "Distance",
        title_2: "Duration of Flight",
        title_3: "Cost",
    },
];

