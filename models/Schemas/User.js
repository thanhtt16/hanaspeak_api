var sequelize = require('./index');

const User = sequelize.define('temp_user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
// User.sync({
//     force: true
// }).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

User.findAll().then(users => {
    console.log(users)
})

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize.authenticate()
    .then(() => {
        console.log("authen success");
    })
    .catch(() => {
        console.log("authen failed");
    })