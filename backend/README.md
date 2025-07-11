# The backend

The backend for the Aircraft Defect Viewer handles API calls 
and retrieves data from the database.

## Routes

`/api/defects` - returns all defects


## Development

Use the `dev` while developing:

```
npm run dev
```

This will start the backend server on port 3000 by default.
While developing, make sure to start the database container manually 
and expose port 27017.


## Running the backend 

The backend is ran using the `compose.yml` -file found in the root of this project, using the command

```
docker compose up
```

This will start all the services related to the Aircraft Defect Viewer: frontend, backend and database.


You can run the container individually, as well.

To do that, you first need to build the the image:

```
docker build -t adv-backend .
```

and then run it with:

```
docker run -p 3000:3000 --network adv --name adv-backend adv-backend
```

## Referencs material

This [article](https://blog.logrocket.com/express-typescript-node/) was used as a guideline for setting up the backend.
Help for connecting to the database was found [here](https://medium.com/@felixpratama242/crud-using-express-js-typescript-and-mongodb-0504b2617bf1)





