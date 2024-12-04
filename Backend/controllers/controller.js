const posts = require("../data/posts.js");

function index(req, res) {
  console.log("Ecco i post!");
  res.json(posts);
}

function show(req, res) {
  console.log(`Ecco il post con id: ${req.post.id}`);
  res.json(req.post);
}

function store(req, res) {
  const { title, slug, content, image, tags } = req.body;
  console.log("Dati in arrivo:", req.body);
  const newPost = {
    id: posts.length + 1,
    title,
    slug,
    content,
    image,
    tags,
  };
  posts.push(newPost);
  console.log("Nuovo post creato:", newPost);
  res.status(201).json(newPost);
}


function update(req, res) {
  const { title, slug, content, image, tags } = req.body;
  req.post.title = title;
  req.post.slug = slug;
  req.post.content = content;
  req.post.image = image;
  req.post.tags = tags;
  console.log("Post aggiornato:", req.post);
  res.json(req.post);
}

function modify(req, res) {
  const { title, slug, content, image, tags } = req.body;
  if (title) req.post.title = title;
  if (slug) req.post.slug = slug;
  if (content) req.post.content = content;
  if (image) req.post.image = image;
  if (tags) req.post.tags = tags;
  console.log("Post modificato:", req.post);
  res.json(req.post);
}

function destroy(req, res) {
  const postIndex = posts.findIndex((post) => post.id === req.post.id);
  posts.splice(postIndex, 1);
  console.log(`Post con id ${req.post.id} eliminato`);
  res.json(posts);
}

module.exports = { index, show, store, update, modify, destroy };
