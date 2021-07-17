
import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker } from './DatePickrer';
import SimplePopover from './Popover';
import { Link } from 'react-router-dom';;

const myArr = [
  { value: 'Nội Bài',label: 'Nội Bài' },
  { value: 'Tân sơn nhất', label: 'Tân sơn nhất' },
  { value: 'Cam Ranh', label: 'Cam ranh' },
];


export function SelectInput() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="select">
      <Select
        className="select-item"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={myArr}
        placeholder={"From where?"}
        
      />
      <Select
        className="select-item"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
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

      <button className="search-btn">
        <Link to='/flight-search'>Search</Link>
      </button>
    
    </div>
  );
}
