var { sequelize, Sequelize, TIMESTAMP } = require('./index');
var Book = require('./Book');

const Lesson = sequelize.define('lessions', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: {type: Sequelize.STRING},
    book_id: { type: Sequelize.INTEGER(11).UNSIGNED, references: { model: Book, key: 'id' } },
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

// Lesson.sync({
//     force: true
// }).then(() => {
//     console.log("Create table lession");
// }).catch(error => {
//     console.log(error);
// });

module.exports = Lesson;
