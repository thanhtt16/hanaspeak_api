var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const User = sequelize.define('users', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, validate: {} },
    email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false, validate: {} },
    remember_token: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING(20), validate: { len: [10, 16], is: /\d+/ } },
    active: { type: Sequelize.TINYINT(2), defaultValue: 1 },
    parent_user_id: { type: Sequelize.INTEGER(11) }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })


// force: true will drop the table if it already exists
User.sync({
    force: false
}).then(() => {
    console.log("Create table users");
}).catch(error => {
    console.log(error);
});
module.exports = User;