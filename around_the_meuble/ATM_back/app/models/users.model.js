module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        email: {
            type: Sequelize.STRING,
            allowNull : false
        },
        password: {
            type: Sequelize.STRING.BINARY,
            allowNull : false
        },
        nom: {
            type: Sequelize.STRING,
            allowNull : false
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull : false
        },
    }, {
        timestamps: false
    })
        return Users;
}