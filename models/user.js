module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "user",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        tableName: "user",
        timestamps: false,
      }
    );
  
    return User;
  };
  