import { Item } from '../model/item.js';
import { Op } from 'sequelize';
import logger from '../logger.js';
import * as fs from 'fs';

export async function createItem(req, res) {
  try {
    const itemData = {
      ...req.body,
      itemImage: null,
      howToRecycle: null,
      upcycleVideo: null, // TODO: YouTube API
      categoryId: null,
    };
    const newItem = await Item.create(itemData);

    res.status(200).json({ newItem, alert: 'Successfully saved a new item!' });
    res.end();
  } catch (error) {
    console.error(error);
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

    const items = await Item.findAll({
      where: {
        itemName: { [Op.like]: `%${search}%` },
      },
    });

    logger.log('info', items[0]);
    res.status(200);
    res.send(items);
    res.end();
  } catch (error) {
    res.status(401);
    res.send(error);
    res.end();
  }
}

export async function updateItem(req, res) {
  try {
    const { id } = req.params;
    await Item.update({ ...req.body }, { where: { itemId: id } });
    const updatedItem = await Item.findByPk(id);

    res.status(200);
    res.send(updatedItem);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(401);
    res.send(error);
    res.end();
  }
}

export async function getLastSearchedItem(req, res) {
  try {
    const logFile = fs.readFileSync('./all.log', 'utf8');
    const logData = logFile.split('\n');
    res.status(200);
    res.send(logData[logData.length - 2]);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.end();
  }
}
