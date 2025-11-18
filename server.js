const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const knex = require('knex');
const config = require('./knexfile');
const db = knex(config.development);

app.get('/kaizen', async (req, res) => {
  const rows = await db('kaizen').select('*');
  res.json(rows);
});

app.get('/kaizen/:id', async (req, res) => {
  const row = await db('kaizen').where({ id: req.params.id }).first();
  if (!row) return res.status(404).json({ error: 'not found' });
  res.json(row);
});

app.post('/kaizen', async (req, res) => {
  console.log('req.body:', req.body);
  const {
    id,
    date,
    name,
    number,
    department,
    theme,
    before,
    after,
    solution,
    Effect_Amount,
    safe,
    quality,
    man_Hour,
  } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'idエラーです' });
  }
  const result = await db('kaizen')
    .insert({
      id,
      date,
      name,
      number,
      department,
      theme,
      before,
      after,
      solution,
      Effect_Amount,
      safe,
      quality,
      man_Hour,
    })
    .returning('*');

  res.status(201).json(result[0]);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
