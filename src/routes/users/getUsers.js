import { Database } from '../../database.js';
import { buildRoutePath } from '../../utils/build-route-path.js';

const database = new Database();

export const getUsers = {
  method: 'GET',
  path: buildRoutePath('/users'),
  handler: (req, res) => {
    const { search } = req.query;

    const users = database.select(
      'users',
      search
        ? {
            name: search,
            email: search,
          }
        : null,
    );

    return res.end(JSON.stringify(users));
  },
};
