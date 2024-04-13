const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Actor', {
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
      allowNull: true
    },
    favorite_movie_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
},
{ 
   timestamps: true,
   tableName: "actors",
   underscored: true
 })
};
    
    
//       const Actor = sequelize.define(alias, cols, config); 

//     Actor.associate = function (models) {
//         Actor.belongsToMany(models.Movie, {
//             through: "actor_movie",
//             foreignKey: "actor_id",
//             otherKey: "movie_id",
//             timestamps: false,
//         });
//     }

//   return Actor;
// }