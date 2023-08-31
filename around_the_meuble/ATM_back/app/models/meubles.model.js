module.exports = (sequelize, Sequelize) => {
    const Meubles = sequelize.define("meubles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        photo: {
            type: Sequelize.STRING,
            allowNull : false
        },
        type: {
            type: Sequelize.STRING,
            allowNull : false
        },
        nom: {
            type: Sequelize.STRING,
            allowNull : false
        },
        prix: {
            type: Sequelize.DECIMAL,
            allowNull : false
        },
        description: {
            type: Sequelize.STRING(500),
            allowNull : false
        },
        couleur: {
            type: Sequelize.STRING,
            allowNull : false
        },
        matiere: {
            type: Sequelize.STRING,
            allowNull : false
        },
        dimensions: {
            type: Sequelize.STRING,
            allowNull : false
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
        status:{
            type: Sequelize.STRING,
            allowNull : false
        },
        cleVendeur: {
            type: Sequelize.INTEGER,
            references : {
                model: 'users',
                key: 'id'
            }
        },
      },
    {
      timestamps: false,
    }
  );
  return Meubles;
};
