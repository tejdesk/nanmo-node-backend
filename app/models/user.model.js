module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING,allowNull: true
    },
    last_name: {
      type: Sequelize.STRING,allowNull: true
    },
    company_name: {
      type: Sequelize.STRING,allowNull: true
    },
    dob: {
      type: Sequelize.DATEONLY,allowNull: true
    },
    company_anniversary: {
      type: Sequelize.DATEONLY,allowNull: true
    },
    timezone: {
      type: Sequelize.STRING,allowNull: true
    },
    address: {
      type: Sequelize.STRING,allowNull: true
    },
    profile: {
      type: Sequelize.STRING,allowNull: true
    }
  });

  return User;
};