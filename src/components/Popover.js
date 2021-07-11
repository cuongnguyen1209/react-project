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
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

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
        <div>{count1} Adults</div>
        <div>{count2} Minors</div>
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
                    <button onClick={()=>setCount1(count1 - 1)}>-</button>
                    <p>{count1}</p>
                     <button onClick={()=>setCount1(count1 + 1)}>+</button>
                </div>
                <div className="person-count-item">
                    <p>Minors: </p>
                    <button onClick={()=>setCount2(count2 - 1)}>-</button>
                    <p>{count2}</p>
                     <button onClick={()=>setCount2(count2 + 1)}>+</button>
                </div>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}