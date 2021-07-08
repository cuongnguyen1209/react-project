import { placeholder } from '@babel/types';
import React, { useState } from 'react';
import Select from 'react-select';
import departure from '../img/departure.jpg';
import { DatePicker } from './DatePickrer';
import Popover from '@material-ui/core/Popover';
import SimplePopover from './Popover';

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

      <button className="search-btn">Search</button>
    
    </div>
  );
}
