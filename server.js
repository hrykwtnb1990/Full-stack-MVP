const cors = require('cors');
const path = require('path');

const express = require('express');
const service = require('./front/src/services/kaizen.service');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(
  cors({
    origin: 'http://localhost:5173/',
  })
);
app.use('/api', (req, res) => {
  res.send('つながった');
});

app.get('/', async (req, res) => {
  try {
    const data = await service.getById(req.params.id);
    res.json(data);
  } catch {
    res.status(404).json({ error: 'Not Found' });
  }
});

app.post('/', async (req, res) => {
  const created = await service.create(req.body);
  res.status(201).json(created);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
