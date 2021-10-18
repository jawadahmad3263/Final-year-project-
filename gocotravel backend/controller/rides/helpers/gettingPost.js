const Post = require("../../../schema/Post");

exports.gettingPost = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};
