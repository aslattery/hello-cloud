const functions = require('firebase-functions');

const runtimeOptions = {
    timeout: 10,
    memory: '128MB'
};

exports.helloNewUser = functions
    .runWith(runtimeOptions)
    .auth.user()
    .onCreate((user) => {
        console.log('Hello there, ', user.email);
    });
