# MaxChat Message

MaxChat Message API is a backend service built with Express.js and MongoDB Atlas.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

## Installation

To get started with MaxChat Message, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/maxchat-message.git
    ```

2. Navigate to the project directory:

    ```bash
    cd maxchat-message
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To run the service locally, follow these steps:

1. Run this command 

    ```bash
    npm run start
    ```

2. You could access the api using localhost:3000/message

To run the MaxChat Message API locally, follow these simple steps:

1. Open your terminal and run the following command:

    ```bash
    npm run start
    ```

    This command starts the API service.

2. Access the API using the following endpoint:

    ```
    http://localhost:3000/message
    ```

3. Explore the available routes:

    - **Get all messages:**
      ```
      GET http://localhost:3000/message
      ```

    - **Get, Update, or Delete a specific message by ID:**
      ```
      GET http://localhost:3000/message/:id
      PUT http://localhost:3000/message/:id
      DELETE http://localhost:3000/message/:id
      ```

    - **Insert a new message:**
      ```
      POST http://localhost:3000/message
      ```

