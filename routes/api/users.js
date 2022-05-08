import express from 'express'
import users_controller from '../../controllers/users_controller.js'
import friends_controller from '../../controllers/friends_controller.js'

const router = express.Router()

router.route('/')
      .get(users_controller.index)
      .post(users_controller.store)

router.route('/:id')
      .get(users_controller.show)
      .put(users_controller.update)
      .delete(users_controller.destroy)

router.route('/:id/friends')
      .get(friends_controller.index)
      .post(friends_controller.store)

router.route('/:user/friends/:friend')
      .get(friends_controller.show)
      .delete(friends_controller.destroy)

export default router