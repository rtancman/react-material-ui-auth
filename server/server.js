const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const uuidv4 = require('uuid/v4');

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(jsonServer.bodyParser)
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'
const expiresIn = '1h'

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn
  })
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

function isAuthenticated({
  email,
  password
}) {
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

function getUserByEmail(email) {
  let user = Object.assign({}, userdb.users.filter(user => user.email === email)[0])
  delete user.password

  return user
}

function checkExistsEmail(email) {
  return userdb.users.findIndex(user => user.email === email) !== -1
}

server.post('/auth/signin', (req, res) => {
  const {
    email,
    password
  } = req.body
  if (isAuthenticated({
      email,
      password
    }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({
      status,
      message
    })
    return
  }

  const access_token = createToken({
    email,
  })

  const user = getUserByEmail(email)

  res.status(200).json({
    access_token,
    ...user,
  })
})

server.get('/auth/session', (req, res) => {
  try {
    let user = verifyToken(req.headers.authorization.split(' ')[1])
    res.status(200).json(user)
  } catch (err) {
    const message = 'Error access_token is revoked'
    res.status(401).json({
      message
    })
  }
})

server.post('/auth/signup', (req, res) => {
  const {
    email,
    password,
    name
  } = req.body
  if (checkExistsEmail(email)) {
    const message = 'This email exists.'
    res.status(400).json({
      message
    })
    return
  }

  const access_token = createToken({
    email,
    password
  })
  res.status(200).json({
    email,
    name,
    access_token,
    id: uuidv4(),
    timestamp: Date.now(),
  })
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({
      status,
      message
    })
    return
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const message = 'Error access_token is revoked'
    res.status(401).json({
      message
    })
  }
})

server.use(router)
server.listen(8080, () => {
  console.log('Run Auth API Server')
})