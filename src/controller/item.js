import { Item } from '../model/item.js';

export async function createItem(req, res) {
  try {
    const newItem = await Item.create({
      ...req.body,
      itemImage: null,
      howToRecycle: null,
      upcycleVideo: null, // TODO: YouTube API
    });
    res.status(200).json({ newItem, alert: 'Successfully saved a new item!' });
    res.end();
  } catch (error) {
    res.status(401).json({ error: 'create failed!' });
  }
}

export async function getAllItem(req, res) {
  try {
    const items = await Item.findAll();
    res.status(200);
    res.send(items);
    res.end();
  } catch (error) {
    res.status(401);
    res.send(error);
    res.end();
  }
}

export async function getFilteredItem(req, res) {
  try {
    const { search } = req.query;

    // TODO
    // await Item....

    res.end();
  } catch (error) {
    res.status(401);
    res.send(error);
    res.end();
  }
}
