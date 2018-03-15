var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const Role = sequelize.define('roles', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    display_name: { type: Sequelize.STRING },
    default_page: { type: Sequelize.STRING(100) }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    })

// force: true will drop the table if it already exists
Role.sync({
    force: false
}).then(() => {
    console.log("Create table roles");
}).catch(error => {
    console.log(error);
});