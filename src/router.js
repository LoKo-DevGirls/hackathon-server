import * as express from 'express';
import { Council, Category } from './controller/index.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running ⚡️');
});
router.get('/councils', Council.getCouncils);
router.post('/council', Council.createCouncil);

router.get('/categories', Category.getCategories);
router.post('/category', Category.createCategory);

export default router;
