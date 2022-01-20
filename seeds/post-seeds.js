const { Post } = require('../models');

//enter [{post title: '', post_url: '', user_id: ''}, repeat];
const postData = [];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;