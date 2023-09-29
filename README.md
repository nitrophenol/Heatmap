# Heatmap Data Structure
## About this project 
This repository contains the code for a Heatmap Data Structure with user registration and login. It allows users to create and manage their heatmaps, providing a visual representation of activity over a one-year period.

## About Implementation
I have implemented basic JWT token authorization and authentication. Afterward, I created two tables: one for users with columns UserID, Username, and Password, and the second for heatmaps with columns UserID and dateActivity. The dateActivity column essentially represents a 2D array, which is used to store heatmap data for one year. When a user creates a heatmap entry, a corresponding entry in the heatmap table is automatically generated, with the dateActivity array initialized from the user's creation date to one year later and each corresponding activity level set to 0. Users can later modify their heatmap using CRUD operation APIs..

## ER Diagram

Explore the database structure in the [ER diagram](https://dbdiagram.io/d/65157c10ffbf5169f0acfb7f).

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/nitrophenol/Heatmap.git

2. Install dependencies (npm i):

3. Put credentials for PostgreSQL DB in constants/index.js:
 
4. Start the server (npm start):


## API Endpoints

To use the provided endpoints, you'll need to create a user and obtain a JWT token for authentication.

### User Registration

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/create](https://heatmap-5qph.onrender.com/api/create)
- **Method**: POST
- **Request body**: Provide a valid username and password, validated by JOI. The username should contain between 3 and 30 characters. Passwords are hashed using bcrypt before being saved to the database.

### User Login

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/login](https://heatmap-5qph.onrender.com/api/login)
- **Method**: POST
- **Request body**: Send a POST request with a registered username and password. If the login is successful, you will receive a JWT token in the response. You must include this JWT token in the headers of all remaining APIs using the "Authorization: Bearer TOKEN" format.

### Heatmap Management

Using the JWT token, you can access the following endpoints:

#### Retrieve the Heatmap

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/getHeatmap](https://heatmap-5qph.onrender.com/api/getHeatmap)
- **Method**: GET
- **Headers**: Include the JWT token in the header.

#### Create a Heatmap Entry

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/createHeatmap](https://heatmap-5qph.onrender.com/api/createHeatmap)
- **Method**: POST
- **Headers**: Include the JWT token in the header.
- **Request body**: Provide the date and activity level in the request body as specified in the Postman collection.

#### Update a Heatmap Entry

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/updateHeatmap](https://heatmap-5qph.onrender.com/api/updateHeatmap)
- **Method**: PUT
- **Headers**: Include the JWT token in the header.
- **Request body**: Similar to the create heatmap endpoint, provide the date and updated activity level.

#### Get the Current Streak

- **Endpoint**: [https://heatmap-5qph.onrender.com/api/streak](https://heatmap-5qph.onrender.com/api/streak)
- **Method**: GET
- **Headers**: Include the JWT token in the header and the current date to retrieve the streak information.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize (ORM)

## Note
Please refer to the provided Postman collection for reference and further details.
