const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('roles', {
     rol: {
      type: DataTypes.STRING,
      allowNull:false
  },
  });
};