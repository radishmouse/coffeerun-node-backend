

# Step 1: Install mongodb

[Download and install MongoDB](https://www.mongodb.org/downloads#production)

# Step 2: Start mongod

    mongod

# Step 3: Create a local .env file that looks like:

```
MONGOLAB_URI=mongodb://localhost/coffeeorder
PORT=1337
```

Do *not* check this in to source control.


# Step 4: Run the server.

    npm install && npm run dev
