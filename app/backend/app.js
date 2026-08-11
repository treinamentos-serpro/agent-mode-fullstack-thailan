const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, title: 'Produto A', price: 19.9 },
  { id: 2, title: 'Produto B', price: 29.9 },
  { id: 3, title: 'Produto C', price: 39.9 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
