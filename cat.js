const fs = require('fs');

const cat = function(file, done) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        done(data);
    })
};


module.exports = cat;