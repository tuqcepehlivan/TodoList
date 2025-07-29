'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Comment.belongsTo(models.Todo, { foreignKey: "TodoId"});
       Comment.belongsTo(models.User, { foreignKey: "userId"});
    }
  }
  Comment.init({
    id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    todoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};