import type {NextApiRequest, NextApiResponse} from 'next';
import todos from '../../../data/todos.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  const todo = todos.find(todo => todo.id === parseInt(id as string));
  res.status(200).json(todo);
}
