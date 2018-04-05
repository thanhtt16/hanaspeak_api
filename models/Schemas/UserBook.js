var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const UserBook = sequelize.define('user_book', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    user_id: { type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false },
    book_id: { type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

UserBook.sync({
    force: true
}).then(() => {
    console.log("Create table user_book");
}).catch(error => {
    console.log(error);
});
module.exports = UserBook;
