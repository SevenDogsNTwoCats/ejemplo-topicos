import express from 'express';
import {register, collectDefaultMetrics} from 'prom-client';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// middleware para coletar las métricas
collectDefaultMetrics();

// endpoint para exibir as métricas prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  try {
    const metrics = await register.metrics();
    res.end(metrics);
  } catch (err) {
    res.status(500).end(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});