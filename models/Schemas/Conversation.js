var { sequelize, Sequelize, TIMESTAMP } = require('./index');
var Lession = require('./Lession');

const Conversation = sequelize.define('conversations', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: {type: Sequelize.STRING, allowNull: false},
    lession_id: {type: Sequelize.INTEGER(11).UNSIGNED, references: {model: Lession, key: 'id'}},
    data: {type: Sequelize.JSON}
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

// Conversation.sync({
//     force: true
// }).then(() => {
//     console.log("Create table conversations");
// }).catch(error => {
//     console.log(error);
// });

module.exports = Conversation;
