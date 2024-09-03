import express from 'express';

import {taskRouter} from './src/router/task-router';
import { db } from './src/sqlite/config/db.config';
import { cardRoutes } from './src/router/card-router';

const app = express();
const port = 3003;

db;

app.get('/', (req, res) => {
  res.send('server is up');
});

app.use('/api', taskRouter);
app.use('/api/card', cardRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
