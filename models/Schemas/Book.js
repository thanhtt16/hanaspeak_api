var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const Book = sequelize.define('books', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    cid: { type: Sequelize.INTEGER(11).UNSIGNED }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

Book.sync({
    force: true
}).then(() => {
    console.log("Create table books");
}).catch(error => {
    console.log(error);
});

module.exports = Book;
