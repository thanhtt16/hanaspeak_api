var { sequelize, Sequelize, TIMESTAMP } = require('./index');

var FlashCardCategory = require('./FlashCardCategory');

const FlashCard = sequelize.define('flash_cards', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(100), allowNull: false, unique: true, validate: { notEmpty: true } },
    translate: { type: Sequelize.STRING },
    audio: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    video: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    note: { type: Sequelize.STRING },
    keyword: { type: Sequelize.STRING(100) },
    category_id: { type: Sequelize.INTEGER(11).UNSIGNED, references: {model: FlashCardCategory, key: 'id'} },
}, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    })


// force: true will drop the table if it already exists
// FlashCard.sync({
//     force: true
// }).then(() => {
//     console.log("Create table flash_cards");
// }).catch(error => {
//     console.log(error);
// });


module.exports = FlashCard;