const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/eduDB", (err, client) => {
  if (err) throw err;

  const db = client.db("eduDB");
  db.collectin("course_cats")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
