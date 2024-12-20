import { createUser } from "./createUser.js"
import { deleteUser } from "./deleteUser.js"
import { getUsers } from "./getUsers.js"
import { updateUser } from "./updateUser.js"

export const usersRoutes = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
}
