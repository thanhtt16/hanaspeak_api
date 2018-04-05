var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const Lesson = sequelize.define('lessons', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    data: { type: Sequelize.TEXT, allowNull: false }
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

Lesson.sync({
    force: true
}).then(() => {
    console.log("Create table lesson");
}).catch(error => {
    console.log(error);
});

module.exports = Lesson;
