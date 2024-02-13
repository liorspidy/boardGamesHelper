import { useState, useEffect } from 'react';
import arrows from '../images/arrows.png';
import classes from './Direction.module.scss';

const Direction = () => {
  const [spinSide, setSpinSide] = useState(() => {
    return localStorage.getItem('spinSide') || 'right';
  });

  const flipSideHandler = () => {
    const newSpinSide = spinSide === 'right' ? 'left' : 'right';
    setSpinSide(newSpinSide);

    localStorage.setItem('spinSide', newSpinSide);
  };

  useEffect(() => {
    localStorage.setItem('spinSide', spinSide);
  }, [spinSide]);

  return (
    <div className={classes.directionContainer}>
      <div className={`${classes.arrowsContainer} ${spinSide === 'right' ? '' : classes.backwords}`}>
        <img
          className={classes.arrows}
          src={arrows}
          alt="arrows"
        />
      </div>

      <div className={classes.buttons}>
        <button className={classes.button} onClick={flipSideHandler}>
          Flip Side
        </button>
      </div>
    </div>
  );
};

export default Direction;
