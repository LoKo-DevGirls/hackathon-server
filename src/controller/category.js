import { Category } from '../model/category.js';

export async function createCategory(req, res) {
  try {
    const { categoryName } = req.body;
    const newCategory = await Category.create({
      categoryName,
    });
    res
      .status(200)
      .json({ newCategory, alert: 'Successfully saved a new category!' });
  } catch (error) {
    res.status(401).json({ error: 'create failed!' });
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(401).json(categories);
  }
}
