
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/controller.js");

router.param("id", (req, res, next, id) => {
    const postId = parseInt(id);
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return res.status(404).json({error:"post non trovato"})
    }
    req.post = post;
    next();
})

// aggiunta di un middleware di validazione
function validatePost(req, res, next) {
  const { title, slug, content, image, tags } = req.body;
  if (!title || !slug || !content || !image || !tags) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }
  next();
}


//index
router.get("/", postsController.index);

//show 
router.get("/:id", postsController.show);

//store 
router.post("/", validatePost, postsController.store);

//update 
router.put("/:id", validatePost, postsController.update);

//modify 
router.patch("/:id", postsController.modify);

//destroy 
router.delete("/:id", postsController.destroy);

module.exports = router;