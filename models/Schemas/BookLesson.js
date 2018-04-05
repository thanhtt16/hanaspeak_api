var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const BookLesson = sequelize.define('book_lesson', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    book_id: { type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false },
    lesson_id: { type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })
// BookLesson.sync({
//     force: true
// }).then(() => {
//     console.log("Create table book_lesson");
// }).catch(error => {
//     console.log(error);
// });

module.exports = BookLesson;
