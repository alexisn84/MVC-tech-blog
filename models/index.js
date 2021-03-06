//import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//associate
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// }),

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };