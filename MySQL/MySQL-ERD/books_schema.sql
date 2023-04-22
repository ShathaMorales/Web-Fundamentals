SELECT * FROM books
JOIN favorites ON books.id = favorites.book_id
JOIN author ON author.id = favorites.author_id
WHERE books.id = 5;