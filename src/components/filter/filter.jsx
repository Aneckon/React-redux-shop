import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/reducer';

import { CARD } from '../mokAPI';

import './filter.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const [activeAll, setActiveAll] = useState(false);
  const [activeSold, setActiveSold] = useState(false);
  const [activeSklad, setActiveSklad] = useState(false);

  const filterAll = () => {
    dispatch(setFilter(CARD.filter((item) => item.id)));
    setActiveAll(true);
    setActiveSklad(false);
    setActiveSold(false);
  };
  const filterSold = () => {
    dispatch(setFilter(CARD.filter((item) => item.sold)));
    setActiveSold(true);
    setActiveAll(false);
    setActiveSklad(false);
  };
  const filterNoSklad = () => {
    dispatch(setFilter(CARD.filter((item) => item.noSclad)));
    setActiveSklad(true);
    setActiveAll(false);
    setActiveSold(false);
  };

  useEffect(() => {
    dispatch(setFilter(CARD.filter((item) => item.id)));
  }, [dispatch]);

  return (
    <div className="filter">
      <button className={activeAll ? 'Active' : 'none'} onClick={filterAll}>
        Всі
      </button>
      <button className={activeSklad ? 'Active' : 'none'} onClick={filterNoSklad}>
        Немає на складі
      </button>
      <button className={activeSold ? 'Active' : 'none'} onClick={filterSold}>
        Продані
      </button>
    </div>
  );
};
