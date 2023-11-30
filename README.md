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
    git clone https://github.com/stevenleonard271/maxchat-message.git
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

   - **Get all messages with optional filtering:**
      ```
      GET http://localhost:3000/message?status=delivered&type=text&limit=10&page=1
      ```

      - **Filtering by Status:** You can filter messages by status, e.g., `delivered`, `sent`, `pending`.
      - **Filtering by Type:** You can filter messages by type, e.g., `text`, `image`.
      - **Limiting Results:** You can limit the number of results using the `limit` parameter, e.g., `10`.
      - **Navigating Pages:** You can navigate through paginated results using the `page` parameter, e.g., `1`.

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
      
      Sample JSON body:
      ```json
      {
          "type": "text",
          "from": "0812341655405",
          "status": "delivered",
          "text": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est ow",
          "attachment": "https://via.placeholder.com/600/92c952",
          "meta": {
              "header": {
                  "text": "Lorem Ipsum"
              },
              "body": [
                  {
                      "index": 1,
                      "type": "text"
                  },
                  {
                      "index": 2,
                      "type": "image",
                      "attachmentUrl": "oke"
                  },
                  {
                      "index": 3,
                      "type": "text",
                      "text": "asdf"
                  }
              ]
          }
      }
      ```

