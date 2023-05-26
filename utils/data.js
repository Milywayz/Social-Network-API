const userDb = [
    {
        userName: "Frank",
        email: "Frank@gmail.com",
        friends: [],
        
    },
    {
        userName: "James",
        email: "James@gmail.com",
        friends: [],
    },
];

const thoughtDb = [
    {
        thoughtText: "I wonder how to make pancakes?",
        userName: "Frank"
    },
];


const reactionDb = [
    {
        reactionBody: "To be honest... idk",
        userName: "James"
    },
];



module.exports = { userDb, thoughtDb, reactionDb }