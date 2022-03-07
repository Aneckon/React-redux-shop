import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/reducer';

import { CARD } from '../mokAPI';

import './filter.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterAll = () => {
    dispatch(setFilter(CARD.filter((item) => item.id)));
  };
  const filterSold = () => {
    dispatch(setFilter(CARD.filter((item) => item.sold)));
  };
  const filterNoSklad = () => {
    dispatch(setFilter(CARD.filter((item) => item.noSclad)));
  };

  useEffect(() => {
    dispatch(setFilter(CARD.filter((item) => item.id)));
  }, [dispatch]);

  return (
    <div className="filter">
      <button onClick={filterAll}>Всі</button>
      <button onClick={filterNoSklad}>Немає на складі</button>
      <button onClick={filterSold}>Продані</button>
    </div>
  );
};
