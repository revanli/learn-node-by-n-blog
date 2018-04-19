module.exports = {
  port: 3000,
  session: {
    secret: 'NBlog',
    key: 'NBlog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/NBlog'
}
