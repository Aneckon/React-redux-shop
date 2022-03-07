import React from 'react';
import { useSelector } from 'react-redux';

import { Filter } from '../../../components';
import { Card } from '../../../components';

export const Product = () => {
  const items = useSelector((state) => state.filter.itemsFilter);

  return (
    <div className="product">
      <Filter />
      <div className="product__content">
        <div className="row">
          {items.map((card) => (
            <div key={card.id} className="col-xl-4 col-md-6">
              <Card
                name={card.name}
                image={card.image}
                price={card.price}
                unavaible={card.unavaible}
                id={card.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
