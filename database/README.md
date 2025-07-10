# The database

The containerized mongodb database contains the aircraft defect data.

The data is imported upon startup from the `aircraft_defects.json` -file
found in this directory.

The data is stored in the database `adv`, in table `defects`.


## Creating/running the database container

The database is ran using the `compose.yml` -file found in the root of this project, using the command

```
docker compose up
```

This will start all the services related to the Aircraft Defect Viewer: frontend, backend and database.

You can run the container individually, as well.

To do that, you first need to build the the image:

```
docker build -t adv-database .
```

and then run it with:

```
docker run  -p 27017:27017 --name adv-database adv-database
```


## Inspecting the data
To inspect the data in the database, you'll need to enter the container interactively:

```
docker exec -it adv-database bash
```

Once in the container, authenticate yourself with 

```
mongosh -u root -p root
```

Then, use the `adv`-database:

```
use adv
```

and list the contents with:

```
db.defects.find()
```

You can give arguments to the query to narrow down the result set.
For example to retrieve only defects with high severity, run:
```
db.defects.find( {severity: "High"})

```
