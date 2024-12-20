import { Database } from '../../database.js';
import { buildRoutePath } from '../../utils/build-route-path.js';

const database = new Database();

export const updateUser = {
  method: 'PUT',
  path: buildRoutePath('/users/:id'),
  handler: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    database.update('users', id, {
      name,
      email,
    });

    return res.writeHead(204).end();
  },
};
