'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.User, { foreignKey: "userId" });
      Todo.belongsTo(models.Category, { foreignKey: "categoryId" });
      Todo.hasMany(models.Comment, {foreignKey:"TodoId" });
      Todo.belongsToMany(tag, {through: "TodoTags"});

    }
  }
  Todo.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};