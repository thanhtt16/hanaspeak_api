var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const FlashCardCategory = sequelize.define('flashcard_category', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(100), allowNull: false, unique: true, validate: { notEmpty: true } },
    description: {type: Sequelize.STRING}
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })

// FlashcardCategory
//     .create({name: 'Động vật'})
//     .then(category => {
//         console.log("insert success");
//     })
//     .catch(error => {
//         console.log(error);
//     })
// force: true will drop the table if it already exists
// FlashcardCategory.sync({
//     force: true
// }).then(() => {
//     console.log("Create table flashcard_category");
// }).catch(error => {
//     console.log(error);
// });


module.exports = FlashCardCategory;