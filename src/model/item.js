import SQ from 'sequelize';
import sequelize from '../db/database.js';

const { DataTypes } = SQ;

export const Item = sequelize.define('item', {
  itemId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  itemName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  itemImage: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  isRecyclable: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
  },
  howToRecycle: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  upcycleVideo: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  councilId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  upcycleVideo: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});
