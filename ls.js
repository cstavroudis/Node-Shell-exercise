const fs = require('fs');
const ls = function(){
    fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
        throw err;
    } else {
        process.stdout.write('\n' + files.join('\n'));
        process.stdout.write("\nprompt > ");
    }
})
}

module.exports = ls;
