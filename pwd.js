const pwd = function() {
    process.stdout.write('\n' + process.cwd());
    process.stdout.write('\nprompt > ');
};

module.exports = pwd;