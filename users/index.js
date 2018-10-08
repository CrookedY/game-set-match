const users = [
    {id: 1, username: 'emilia', password: '1212', name: 'Emilia Lewandowska'},
    {id: 2, username: 'hannah', password: '1212', name: 'Hannah Sewell'},
    {id: 3, username: 'simona', password: '1212', name: 'Simona Yakimova'},
    {id: 4, username: 'stephen', password: '1212', name: 'Stephen Roberts'}
];

exports.lookup = function (username, password, done) {
    return done(null, users.filter(u => u.username == username && u.password == password)[0]);
};

exports.get = function (id, done) {
    return done(null, users.filter(u => u.id == id)[0]);
};
