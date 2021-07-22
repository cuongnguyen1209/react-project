import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker } from './DatePickrer';
import SimplePopover from './Popover';
import { Link } from 'react-router-dom';
import { getDepatureValue, getArrivalValue } from './store/FlightSearchSlice';
import { useDispatch } from 'react-redux';

const myArr = [
  { value: 'Nội Bài',label: 'HAN', city:"Hà Nội", lat: 21.2, long: 105.8},
  { value: 'Tân Sơn Nhất', label: 'SGN', city:"Hồ Chí Minh", lat: 10.8, long: 106.7},
  { value: 'Cam Ranh', label: 'CXR', city:"Nha Trang", lat: 12, long: 109},
];



export function SelectInput() {
  const [selectedOptionDepature, setSelectedOptionDepature] = useState("");
  const [selectedOptionArrival, setSelectedOptionArrival] = useState("");
  const dispatch = useDispatch();
  // const departure = useSelector((state)=>state.flightSearch.depatureValue)
  // const arrival = useSelector((state)=>state.flightSearch.arrival)
  
  const searchOnclick = () => {
    dispatch(getDepatureValue(selectedOptionDepature));
    dispatch(getArrivalValue(selectedOptionArrival));
  }

  

  
  return (
    
    <div className="select">
      <Select
        className="select-item"
        defaultValue={selectedOptionDepature}
        onChange={setSelectedOptionDepature}
        options={myArr}
        placeholder={"From where?"}
      />
      <Select
          className="select-item"
          defaultValue={selectedOptionArrival}
          onChange={setSelectedOptionArrival}
          options={myArr}
          placeholder={"Where to?"}
      />
   
      <DatePicker />

      <SimplePopover 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
        The content of the SimplePopover.
      </SimplePopover>

      <button className="search-btn" onClick={searchOnclick}>
        <Link to='/flight-search'>
          Search
        </Link>
      </button>
    
    </div>
  );
}
