var { sequelize, Sequelize, TIMESTAMP } = require('./index');

const User = sequelize.define('users', {
    id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { notEmpty: true } },
    password: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
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
// User.sync({
//     force: true
// }).then(() => {
//     console.log("Create table users");
// }).catch(error => {
//     console.log(error);
// });

// Create user
// User.create({
//     username: '',
//     password: 'thanhtt01',
//     email: 'a@gmail.com'
// })
//     .then(user => {
//         console.log('object');
//     })
//     .catch(err => {
//         console.log(err);
//     })

// User.findOrCreate({
//     defaults: { username: 'thanhtt01', password: 'thanhtt01', email: 'thanhtt@gmail.com' },
//     where: { username: 'thanhtt01' }
// })
//     .spread((user, created) => {
//         console.log(user.username);
//         console.log(created);
//     })
//     .catch(error=>{
//         console.log("error");
//     })
// console.log(Object.keys(User.rawAttributes));

// User.findAndCountAll({

// })
// .spread(result =>{
//     console.log(result.count);
// })
// .catch(err=>{
//     console.log(err);
// })
// var bcrypt = require('bcrypt');
// let userData = { email: 'aaa' }
// User.update(userData, {
//     where: { id: 1 }
// }).then(results => {
//     console.log(results);
// }).catch(err => {
//     console.log(err);
// })
// User.destroy({
//     where: {id: 6}
// })
// .then(result=>{
//     console.log(result);
// })
module.exports = User;