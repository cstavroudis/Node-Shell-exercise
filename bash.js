const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');



const done = (output) => {
    //show the output
    //console.log(output);
    
    process.stdout.write(output);
    //show the prompt

    process.stdout.write('\nprompt > ')
}

//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();  //remove the newline
  
    if (cmd === 'pwd') {
        pwd(done);
    } 
    if (cmd === 'ls') {
        ls(done);
    }
    if (cmd.slice(0,3) === 'cat') {
        const file = cmd.slice(4);
        cat(file, done);
    }
    if (cmd.slice(0,4) === 'curl') {
        const url = cmd.slice(5);
        curl(url, done);
    }
    else  {
        process.stdout.write('You typed: ' + cmd);
    }

    process.stdout.write('\nprompt > ');
});
