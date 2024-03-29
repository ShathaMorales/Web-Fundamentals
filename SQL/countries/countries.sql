USE world;


SELECT countries.name AS name, languages.language AS language, languages.percentage
FROM countries JOIN languages ON countries.id = languages.country_id
WHERE languages.language = "Slovene"
ORDER BY languages.percentage DESC;


SELECT countries.name as name, 
COUNT(cities.name) as cities
FROM countries
LEFT JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY cities DESC;


SELECT  name, population, country_id 
FROM cities
WHERE cities.population > 500000
AND cities.country_id = ( SELECT id FROM countries WHERE countries.name = "Mexico" )
ORDER BY population DESC;


SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;


SELECT name, surface_area, population 
FROM countries
WHERE surface_area < 501
AND population >100000;


SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE capital > 200
AND government_form =" Constitutional Monarchy"
AND life_expectancy > 75;


SELECT countries.name AS Country_Name, cities.name AS City_Name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.district = "Buenos Aires"
AND cities.population > 500000
ORDER BY cities.population DESC;


SELECT countries.region, 
COUNT(countries.name) AS countries
FROM countries
GROUP BY countries.region
ORDER BY countries DESC;
