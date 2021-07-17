import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import person from '../img/person-solid.jpg';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));



export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adultCount, setAdultCount] = useState(0);
  
  const [minorCount, setMinorCount] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="popover">
      <button aria-describedby={id} variant="contained" color="white" onClick={handleClick}>
       <div className="btn-content">
        <img src={person}/>
        <div>{adultCount} Adults</div>
        <div>{minorCount} Minors</div>
       </div>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
            <div className="person-count">
                <div className="person-count-item">
                    <p>Adults: </p>
                    <button onClick={()=>{if(adultCount > 0){setAdultCount(adultCount - 1)}}}>-</button>
                    <p>{adultCount}</p>
                     <button onClick={()=>setAdultCount(adultCount + 1)}>+</button>
                </div>
                <div className="person-count-item">
                    <p>Minors: </p>
                    <button onClick={()=>{if(minorCount > 0){setMinorCount(minorCount - 1)}}}>-</button>
                    <p>{minorCount}</p>
                     <button onClick={()=>setMinorCount(minorCount + 1)}>+</button>
                </div>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}