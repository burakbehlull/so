const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
    date: {
		type: Date,
		default: Date.now,
	}
})

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;