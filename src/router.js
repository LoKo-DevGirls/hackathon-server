import * as express from 'express';
import { Council, Item } from './controller/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running ⚡️');
});

router.get('/councils', Council.getCouncils);
router.post('/council', Council.createCouncil);

router.post('/item', Item.createItem);
router.get('/allitem', Item.getAllItem);

router.get('**', (req, res) => {
  res.send('❌ invalid route');
});

export default router;
