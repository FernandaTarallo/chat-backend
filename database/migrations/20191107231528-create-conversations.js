module.exports = {
  up: (queryInterface, DataTypes) => {
    
    return queryInterface.createTable('Conversations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idUserOne: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idUserTwo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Conversations');
  }
};
