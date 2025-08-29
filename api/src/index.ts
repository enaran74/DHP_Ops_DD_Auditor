import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(helmet());
app.use(cors({ origin: '*'}));
app.use(express.json({ limit: '10mb' }));
app.use(morgan('tiny'));

const PORT = Number(process.env.API_PORT || 4000);

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'api', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://0.0.0.0:${PORT}`);
});

