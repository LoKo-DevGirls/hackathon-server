import { Category } from '../model/category.js';

export async function createCategory(req, res) {
  try {
    const categories = await Category.findAll();
    let newCategory;
    // create base category set
    if (categories.length === 0) {
      const BASE_CATEGORY = ['Paper', 'Glass', 'Plastic', 'Metal'];
      for (let i = 0; i < BASE_CATEGORY.length; i++) {
        newCategory = await Category.create({
          categoryName: BASE_CATEGORY[i],
        });
      }
    } else {
      // add additional category if it's needed
      const { categoryName } = req.body;
      newCategory = await Category.create({
        categoryName,
      });
    }
    res
      .status(201)
      .json({ newCategory, alert: 'Successfully saved a new category!' });
  } catch (error) {
    res.status(500).json({ error: 'create failed!' });
  }
}

export async function getCategories(req, res) {
  try {
    const categories = await Category.findAll({ raw: true });
    const categoriesArray = categories.map((category) => category.categoryName);
    const removeDuplication = [...new Set(categoriesArray)];
    res.status(200).json(removeDuplication);
  } catch (error) {
    res.status(500).json(error);
  }
}
