var fetch = require('node-fetch');
var exec = require('child_process').exec;
var cmd = 'sh skripta.sh';

var rjesenje;
exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
    rjesenje = stdout;
    rjesenje = rjesenje.slice(0, rjesenje.length - 1)
    fetch('http://192.168.0.71:8080/listen', 
    {
        method: 'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify({'temp': rjesenje}) })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    })
})

