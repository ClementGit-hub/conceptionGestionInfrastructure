module.exports = (sequelize, Datatypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: Datatypes.STRING,
            allowNull: false
        }/*,
        ipAddress: {
            type: Datatypes.STRING,
            allowNull: false
        },
        mainWebBrowser: {
            type: Datatypes.STRING,
            allowNull: false
        }*/
    });

    return Users;
};