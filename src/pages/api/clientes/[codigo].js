/* eslint-disable */

export default function handler(req, resp) {
  const codigo = req.query.codigo;
  resp.status(200).json({
    id: codigo,
    nome: `Maria ${codigo}`,
    email: `maria${codigo}@gmail.com`,
  });
}
