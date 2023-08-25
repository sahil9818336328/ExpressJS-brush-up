const express = require('express')

const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const newProduct = products.find(
    (product) => product.id === Number(productID)
  )

  if (!newProduct) {
    return res.status(404).send(`Product with id ${productID} does not exists`)
  }
  return res.json(newProduct)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
