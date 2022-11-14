const express = require('express')
const router = express.Router()
import { createPost, getAllPost, getPostById, deletePostById, updatePost } from '../controllers/postController'

router.get('/', (req, res) => {
  res.send('Hello World!')
})

// Post routes
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.get('/posts', getAllPost)
router.get('/posts/:id', getPostById)
router.delete('/posts/:id', deletePostById)

export default router
