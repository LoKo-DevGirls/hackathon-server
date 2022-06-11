import SQ from 'sequelize';
import sequelize from '../db/database.js';

const { DataTypes } = SQ;

export const Category = sequelize.define('category', {
  categoryId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});
