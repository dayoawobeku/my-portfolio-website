import type {NextApiRequest, NextApiResponse} from 'next';
import todos from '../../../data/todos.json';

type Data = {
  id: number;
  title: string;
  body: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | object>,
) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const todo = req.body;
    const newTodo = {
      id: Date.now(),
      title: todo.title,
      body: todo.body,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
}
