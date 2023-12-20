import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs'; 


var publicKEY  = readFileSync('../../dev-rosenstein-immobilien-dashboard.pem', 'utf8');

function auth(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, publicKEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

export {
  auth
}