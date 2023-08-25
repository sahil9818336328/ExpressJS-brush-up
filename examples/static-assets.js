const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get('*', (req, res) => {
  res.status(404).send('Not found...')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000...')
})
