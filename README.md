## Running the service

### 1. Running the database
- Make sure you already have MySQL Server installed
- For sanity check:
    - Either run it straight from the command like like this: `/usr/local/mysql/bin/mysql -u root -p` & enter your password
    - Or add to your PATH this line `PATH=$PATH:/usr/local/mysql/bin` then just use `mysql -u root -p` to log in
    - After logging in, `USE ``sword-api-db``;` then you can check both `Roles` and `Tasks` tables with `SELECT * FROM Roles/Tasks;`

### 2. Running the server
- `npm i` && `npm run seed` && `npm run start`

### 3. Using the API
- Import the Postman collection after both the server and database are seeded and running