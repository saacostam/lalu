const fs = require('fs');

module.exports = {
    devServer: {
        port: '8080',
        https: {
            key: fs.readFileSync('./certifications/key.pem'),
            cert: fs.readFileSync('./certifications/cert.pem'),
        },
    },
};