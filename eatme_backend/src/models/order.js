'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    customer_name: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.ENUM,
    pending: DataTypes.BOOLEAN,
    total_price: DataTypes.FLOAT,
    items: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};