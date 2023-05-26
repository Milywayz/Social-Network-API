const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userDb, thoughtDb, reactionDb } = require('./data')

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});
  await Thought.deleteMany({});

 
  const seedData = (arr) => {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(thoughtDb)
        results.push({
            thoughts: (thoughtDb)[i],
        })
        
    }
    
    let createdUser =  User.collection.insertMany(results);
    console.log(createdUser.insertedId);
  }
  

  
});
