export const totalPriceCalc = (items) => items.reduce((acc, car) => (acc += car.price), 0);
