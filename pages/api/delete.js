import { deleteSubject } from './_helpers';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    await deleteSubject(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
