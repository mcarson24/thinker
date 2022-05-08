import express from 'express'
import thoughts_controller from '../../controllers/thoughts_controller.js'
import reactions_controller from '../../controllers/reactions_controller.js'

const router = express.Router()

router.route('/')
      .get(thoughts_controller.index)
      .post(thoughts_controller.store)
      
router.route('/:id')
      .get(thoughts_controller.show)
      .put(thoughts_controller.update)
      .delete(thoughts_controller.destroy)

router.route('/:id/reactions')
      .get(reactions_controller.index)
      .post(reactions_controller.store)

router.route('/:thought/reactions/:reaction')
      .delete(reactions_controller.destroy)

export default router