module.exports = {
  up: (queryInterface, DataTypes) => {

    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      idConversation: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: {
              tableName: "Conversations",
          },
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt:{
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Messages');
  }
};
