/* eslint-disable */

export default function handler(req, resp) {
  if (req.method === 'GET') {
    handleGet(req, resp);
  } else {
    resp.status(405).send();
  }

  function handleGet(req, resp) {
    resp.status(200).json({
      id: 3,
      nome: 'Maria',
      email: 'maria@gmail.com',
    });
  }
}
