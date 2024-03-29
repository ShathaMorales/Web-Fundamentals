USE sakila;

SELECT customer.first_name, customer.last_name, customer.email, address.address, city.city_id
FROM customer JOIN address ON customer.address_id = address.address_id
JOIN city on address.city_id = city.city_id
WHERE city.city_id = 312;


SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
From film JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "comedy";


SELECT actor.actor_id, actor.first_name, actor.last_name, film.title, film.description, film.release_year
FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE actor.actor_id=5;


SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer JOIN address ON address.address_id = customer.address_id
WHERE (address.city_id =1 OR address.city_id = 42 OR address.city_id = 312 OR address.city_id = 459) AND customer.store_id=1;


SELECT actor.actor_id, actor.first_name, actor.last_name, film.title, film.description, film.release_year, film.rating, film.special_features
FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film.rating = "G" AND film.special_features LIKE "%behind the scenes%" AND actor.actor_id=15;


SELECT film.film_id, film.title, actor.actor_id, actor.first_name, actor.last_name
FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film.film_id = 369;


SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
FROM film JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Drama" AND film.rental_rate = 2.99; 


SELECT actor.first_name, actor.last_name, film.title, film.description, film.release_year, film.rating, film.special_features
From film JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor on actor.actor_id = film_actor.actor_id
WHERE category.name = "action" AND actor.first_name = "SANDRA" AND actor.last_name = "KILMER";
