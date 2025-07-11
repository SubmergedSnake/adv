db = db.getSiblingDB("adv");
db.createCollection("defects");

db.createUser({
  user: "adv",
  pwd: "adv",
  roles: [{ role: "readWrite", db: "adv" }],
});
