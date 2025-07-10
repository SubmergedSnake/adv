#!/bin/bash

mongoimport --db='adv' --collection='defects' --file='/tmp/aircraft_defects.json' --jsonArray --username='root' --password='root' --authenticationDatabase=admin
