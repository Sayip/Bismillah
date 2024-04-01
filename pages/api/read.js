import { getAllSubjects, getSubjectById } from './_helpers';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const subjects = await getAllSubjects();
      return res.status(200).json(subjects);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET' && req.query.id) {
    const { id } = req.query;
    try {
      const subject = await getSubjectById(id);
      if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
      }
      return res.status(200).json(subject);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
