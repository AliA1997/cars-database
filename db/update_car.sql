UPDATE cars
SET make = ${make}, model = ${model}, year = ${year}, price = ${price}
WHERE id = ${id};
SELECT * FROM cars;