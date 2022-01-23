const { Post } = require('../models');

//enter [{post title: '', post_url: '', user_id: ''}, repeat];
const postData = [
    {
        title: "UK judge throws out Google anti-trust lawsuits",
        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    },
    {
        title: "Skype - it is time to retire",
        post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx', 
        user_id: 2
    },
    {
        title: "Microsoft previews Windows 11",
        post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 3
    },
    {
        title: "Pet database upgrade causes users to go batty",
        post_url: 'http://google.ca/nam/nulla/integer.aspx',
        user_id: 4
    },
    {
        title: "Smart devices do more than give weather reports",
        post_url: 'https://stanford.edu/consequat.png',
        user_id: 1
    },
    {
        title: "Crazy times",
        post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;