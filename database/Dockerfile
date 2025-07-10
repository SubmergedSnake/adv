FROM mongo:7.0.2
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root
ENV MONGO_INITDB_DATABASE=adv

COPY aircraft_defects.json /tmp/aircraft_defects.json
COPY importscript.sh /docker-entrypoint-initdb.d/

ADD init-mongo.js /docker-entrypoint-initdb.d/
