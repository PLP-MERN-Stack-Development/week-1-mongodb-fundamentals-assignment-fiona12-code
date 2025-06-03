// Basic CRUD Operations
// Create a new database and collection, then insert multiple documents into the collection
use: plp_bookstore;
db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: "J. B. Lippincott & Co.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: "Chatto & Windus",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: "Little, Brown and Company",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton, Whitehall",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: "Allen & Unwin",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Political Satire",
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: "Secker & Warburg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: "HarperOne",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    published_year: 1851,
    price: 12.5,
    in_stock: false,
    pages: 635,
    publisher: "Harper & Brothers",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Gothic Fiction",
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: "Thomas Cautley Newby",
  },
]);

// Query to find books by the genre "Fiction"
db.books.find({ genre: "Fiction" });

// Query to find books published after 1900
db.books.find({ published_year: { $gt: 1900 } });

// Query to find books written by specific author
db.books.find({ author: "Jane Austen" });

// Query to increase the price of a book
db.books.updateOne({ title: "The Hobbit" }, { $inc: { price: 2 } });

// Query to delete a book by title
db.books.deleteOne({ title: "The Catcher in the Rye" });

// Query to find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 },
});

// Query to find books that are in stock and return only title, author, and price
db.books.find({ in_stock: true }, { title: 1, author: 1, price: 1, _id: 0 });

// Query to find books that are in stock and sort by price in ascending order
db.books
  .find({ in_stock: true }, { title: 1, author: 1, price: 1, _id: 0 })
  .sort({ price: 1 });

// Query to find books that are in stock and sort by price in descending order
db.books
  .find({ in_stock: true }, { title: 1, author: 1, price: 1, _id: 0 })
  .sort({ price: -1 });

// Queries that use the `limit` and `skip` methods to implement pagination (5 books per page)
// for page 1 (i.e. books 1–5):
db.books.find().skip(0).limit(5);

// for page 2 (i.e. books 6–10):
db.books.find().skip(5).limit(5);

// for page 3 (i.e. books 11–15):
db.books.find().skip(10).limit(5);

// Aggregation query to calculate the average price of books per genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre", // Grouping by genre field
      averagePrice: { $avg: "$price" }, // Calculating average price per genre
    },
  },
  {
    $sort: { averagePrice: -1 }, // Optional: sorts genres by highest avg price first
  },
]);

// aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 },
    },
  },
  {
    $sort: { bookCount: -1 },
  },
  {
    $limit: 1,
  },
]);

// Query that implements a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          {
            $toString: {
              $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10],
            },
          },
          "s",
        ],
      },
    },
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 },
    },
  },
  {
    $sort: { _id: 1 }, // Sort by decade
  },
]);

// Query to create an index on the title field to ensure uniqueness
db.books.createIndex({ title: 1 }, { unique: true });

// Query to create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 });

// Query to explain the execution plan for a query that finds books by a specific author and published year
db.books
  .find({ author: "George Orwell", published_year: 1945 })
  .explain("executionStats");

db.books.find({ title: "The Hobbit" }).explain("executionStats");
