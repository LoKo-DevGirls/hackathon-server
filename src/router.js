import * as express from 'express';
import { Council } from './controller/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running ⚡️');
});
router.get('/councils', Council.getCouncils);
router.post('/council', Council.createCouncil);

export default router;
