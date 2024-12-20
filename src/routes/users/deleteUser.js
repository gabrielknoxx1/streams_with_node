import { Database } from '../../database.js';
import { buildRoutePath } from '../../utils/build-route-path.js';

const database = new Database();

export const deleteUser = {
  method: 'DELETE',
  path: buildRoutePath('/users/:id'),
  handler: (req, res) => {
    const { id } = req.params;

    database.delete('users', id);

    return res.writeHead(204).end();
  },
};
