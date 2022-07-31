module.exports = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define('pessoa', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    idade: {
        type: Sequelize.BIGINT,
        allowNull: false,
        allowEmpty: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
  });

  return Pessoa;
};
