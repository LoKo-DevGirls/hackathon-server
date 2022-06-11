import SQ from 'sequelize';
import sequelize from '../db/database';

const { DataTypes } = SQ;

const Council = sequelize.define('council', {
  councilId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  councilName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});
