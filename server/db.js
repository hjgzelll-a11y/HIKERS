const mongoose = require("mongoose");

mongoose.connect("mongodb://Cabatang:987654321@ac-lltjji6-shard-00-00.3amvvip.mongodb.net:27017,ac-lltjji6-shard-00-01.3amvvip.mongodb.net:27017,ac-lltjji6-shard-00-02.3amvvip.mongodb.net:27017/?ssl=true&replicaSet=atlas-14abth-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));