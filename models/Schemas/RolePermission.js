var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const RolePermission = sequelize.define('role_permission', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    role_id: { type: Sequelize.INTEGER(11).UNSIGNED, defaultValue: null },
    permission_id: { type: Sequelize.INTEGER(11).UNSIGNED, defaultValue: null }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })


// force: true will drop the table if it already exists
// RolePermission.sync({
//     force: true
// }).then(() => {
//     console.log("Create table role_permission");
// }).catch(error => {
//     console.log(error);
// });
module.exports = RolePermission;