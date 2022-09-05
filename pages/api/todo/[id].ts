import type {NextApiRequest, NextApiResponse} from 'next';
import todos from '../../../data/todos.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;

  if (req.method === 'GET') {
    const todo = todos.find(todo => todo.id === Number(id));
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({message: `Todo with id ${id} not found`});
    }
  } else if (req.method === 'PUT') {
    const todo = todos.find(todo => todo.id === Number(id));
    if (todo) {
      const {title, body} = req.body;
      todo.title = title;
      todo.body = body;
      res.status(200).json(todo);
    } else {
      res.status(404).json({message: `Todo with id ${id} not found`});
    }
  }
}
