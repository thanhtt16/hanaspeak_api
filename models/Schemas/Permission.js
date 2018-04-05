var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const Permission = sequelize.define('permissions', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    display_name: { type: Sequelize.STRING }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    })

// force: true will drop the table if it already exists
Permission.sync({
    force: true
}).then(() => {
    console.log("Create table permissions");
}).catch(error => {
    console.log(error);
});

module.exports = Permission;