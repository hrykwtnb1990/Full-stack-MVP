const cors = require('cors');
const path = require('path');

const express = require('express');
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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
