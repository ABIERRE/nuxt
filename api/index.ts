import express from 'express'
const app = express()

app.get('/api', (req: any, res: any) => {
  console.log(req)
  res.json({ msg: 'root' })
})

app.get('/api/test', (req: any, res: any) => {
  console.log(req)
  res.json({ msg: 'test' })
})

module.exports = app
