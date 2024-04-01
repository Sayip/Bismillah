import { createSubject } from './_helpers';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name } = req.body;
    const subject = await createSubject({ name });
    return res.status(201).json(subject);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
