const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const starshipsRouter = require('./routes/starshipRouter');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());

app.use('/starships', starshipsRouter);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} !`);
  await sequelize.authenticate();
  console.log('Database Connected!');
});
