db = db.getSiblingDB("adv");
db.createCollection("defects");

db.runCommand({
  collMod: "defects",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id",
        "aircraft_registration",
        "reported_at",
        "defect_type",
        "description",
        "severity",
      ],
      properties: {
        id: {
          bsonType: "string",
          description: "Unique defect identifier",
        },
        aircraft_registration: {
          bsonType: "string",
          description: "Aircraft registration string",
        },
        reported_at: {
          bsonType: "date",
          description: "Date and time defect was reported",
        },
        defect_type: {
          bsonType: "string",
          description: "Type of defect",
        },
        description: {
          bsonType: "string",
          description: "Description of the defect",
        },
        severity: {
          enum: ["Low", "Medium", "High"],
          description: "Severity of the defect",
        },
      },
    },
  },
  validationLevel: "strict",
});

db.createUser({
  user: "adv",
  pwd: "adv",
  roles: [{ role: "readWrite", db: "adv" }],
});

db.defects.updateMany({}, [
  {
    $set: {
      reported_at: {
        $toDate: "$reported_at", // Convert to ISODate regardless of current type
      },
    },
  },
]);
