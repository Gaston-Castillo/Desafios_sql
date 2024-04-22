 const { DataTypes } = require('sequelize');
//  const db = require("../database/models");
module.exports = (sequelize, DataTypes) => {

  const alias='Actor'
   const cols={

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(5, 2),
      // allowNull: true
    },
    favorite_movie_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      // allowNull: true
    }
}


  const config= {
    timestamps: true,
  tableName: "actors",
  createdAt: "created_at",
  updatedAt: "updated_at",
  underscored: true

  }
    
  const Actor = sequelize.define(alias, cols, config); 

Actor.associate = function (models) {
    Actor.belongsToMany(models.Movie, {
        through: "actor_movie",
        foreignKey: "movie_id",
        otherKey: "movie_id",
        timestamps: false,
    });
}

return Actor;
}
