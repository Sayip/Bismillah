import { updateSubject } from './_helpers';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;
  const { name } = req.body;

  try {
    const updatedSubject = await updateSubject(id, { name });
    return res.status(200).json(updatedSubject);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
