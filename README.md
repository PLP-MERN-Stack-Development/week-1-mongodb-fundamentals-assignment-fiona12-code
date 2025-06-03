[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19666608&assignment_repo_type=AssignmentRepo)

# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:

1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

# 📚 PLP Bookstore MongoDB Assignment

## Overview

This project demonstrates the fundamentals and advanced usage of MongoDB as a data layer. It includes database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization using a bookstore dataset.

---

## 📂 Project Structure

- `insert_books.js`  
  Script to insert sample book documents into the `books` collection within the `plp_bookstore` database.

- `queries.js`  
  Contains all MongoDB queries for CRUD operations, advanced filtering, projection, sorting, pagination, aggregation pipelines, and indexing.

- `README.md`  
  This file, providing an overview and instructions.

- `screenshots/`  
  Folder containing screenshots of MongoDB Compass or Atlas showing the database.

---

## 🛠️ Setup and Usage

### Prerequisites

- Node.js installed on your system
- MongoDB Community Edition installed locally or access to a MongoDB Atlas cluster
- MongoDB Shell (`mongosh`) or MongoDB Compass for database interaction

### Steps to Run

1. **Clone the repository**

   ```bash
   git clone <https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-fiona12-code>
   cd <week-1-mongodb-fundamentals-assignment-fiona12-code>
   ```

2. **Insert sample data**

- Run the insert_books.js script to populate the books collection with sample data.

```bash
node insert_books.js
```

3. **Run queries**
   - Use mongosh or MongoDB Compass to execute queries from queries.js. You can also run queries programmatically by adapting the script if needed.

## 🔍 Features Implemented

# Task 1: MongoDB Setup

- Created plp_bookstore database and books collection.

# Task 2: Basic CRUD Operations

- Inserted 10+ book documents with detailed fields.

- Queries for finding books by genre, author, publication year.

- Updating book prices and deleting books by title.

# Task 3: Advanced Queries

- Filtered books in stock and published after 2010.

- Applied projection to retrieve selected fields.

- Implemented sorting by price ascending and descending.

- Pagination with limit and skip for 5 books per page.

# Task 4: Aggregation Pipeline

- Calculated average book price by genre.

- Found author with most books.

- Grouped books by publication decade with counts.

# Task 5: Indexing

- Created single-field index on title.

- Created compound index on author and published_year.

- Demonstrated performance improvement using .explain().

.

## 📸 Screenshots

- <img src="screenshots/Screenshot (149).png" />
- <img src="screenshots/Screenshot (150).png" />
- <img src="screenshots/Screenshot (151).png" />
- <img src="screenshots/Screenshot (152).png" />
- <img src="screenshots/Screenshot (153).png" />
- <img src="screenshots/Screenshot (154).png" />

## 🤝 Acknowledgements

- This project is part of the PLP Week 1 MongoDB assignment designed to teach database fundamentals and advanced MongoDB querying techniques.

## Author

- Mary Fiona Atieno
- Email: omondifiona77@gmail.com
- github: https://github.com/fiona12-code
