## Running the service

### Requirements
- Have `Docker Desktop` (including `docker-compose`), `MySQL Server`, `Node` all installed.

### Running the backend
- `npm run app-start` to start the both the server and the database
- A sanity check is checking out `localhost:8080/` to see a SSR page of the app
- To hard wipe the containers and start fresh, use `docker-compose down --rmi all`

### Automated and manual testing
- To run automated tests, use `npm run app-test`
- To test the APIs, import the Postman collection after both the server and database are seeded and running to test the app