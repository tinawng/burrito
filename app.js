const fs = require('fs');
const autocannon = require('autocannon');
const { v4: uuidv4 } = require('uuid');

autocannon({
    url: 'https://www.arturia.com/',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
}, log)

function log(err, result) {
    if (err) console.log(err);
    fs.writeFileSync('logs/'+uuidv4()+'.json', JSON.stringify(result));
}