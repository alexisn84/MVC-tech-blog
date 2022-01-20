const { Comment } = require('../models');

const commentdata = [
    {
    
        "content": "We need to ensure users have more oversight of their data!",
        "post_id": 1,
        "user_id": 1
    },
    {
        "content": "It is about time these silly lawsuits were dismissed.", 
        "post_id": 1,
        "user_id": 2
    },
    {
        "content": "Does anyone really use Skype any more?",
        "post_id": 2,
        "user_id": 3
    },
    {
        "content": "I am so excited for Windows 11!!",
        "post_id": 3,
        "user_id": 4
    },
    {
        "content": "Hopefully the developers get some mySQL support.",
        "post_id": 4,
        "user_id": 4
    },
    {
        "content": "Hopefully the world gets support.",
        "post_id": 6,
        "user_id": 3
    },
    {
        "content": "Hopefully the developers get some JS support.",
        "post_id": 5,
        "user_id": 1
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;