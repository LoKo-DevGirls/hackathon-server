import * as express from 'express';
import { Council, Category, Item } from './controller/index.js';

import logger from './logger.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running ⚡️');
});

router.get('/councils', Council.getCouncils);
router.post('/council', Council.createCouncil);
router.get('/council/:id', Council.getCouncilbyId);

router.get('/categories', Category.getCategories);
router.post('/category', Category.createCategory);

router.post('/item', Item.createItem);
router.get('/allitem', Item.getAllItem);
router.patch('/item/:id', Item.updateItem);
router.get('/item', Item.getFilteredItem);
router.get('/recentItem', Item.getLastSearchedItem);
router.get('/item/:id', Item.getItemById);

router.get('**', (req, res) => {
  res.send('❌ invalid route');
});

export default router;
