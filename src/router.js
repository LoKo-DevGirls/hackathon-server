import * as express from 'express';
import { Council } from './controller/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running ⚡️');
});

router.post('/council', Council.createCouncil);

export default router;
