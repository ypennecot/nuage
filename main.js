/**
 * Created by yannick on 10/03/2015.
 */
var http = require('http');
var url = require('url');
var gpio = require('pi-gpio');

var SimpleImap = require('simple-imap');

var options = {
    user: 'eugeniebastille@gmail.com',
    password: 'hedotech78',
    host: 'smtp.gmail.com',
    port: 993,
    tls: true,
    mailbox: 'INBOX'
};



var simpleImap = new SimpleImap(options);

simpleImap.on('error', function(err) {
    console.log(err);
});

simpleImap.on('mail', function(mail) {
    console.log('coucou');
});

simpleImap.start();




var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/on') {
        res.write('on');
        gpio.open(16, "output", function(err) {     // Open pin 16 for output
            gpio.write(16, 1, function() {          // Set pin 16 high (1)
                gpio.close(16);                     // Close pin 16
            });
        });
    }
    else if (page == '/off') {
        res.write('off');
        gpio.open(16, "output", function(err) {     // Open pin 16 for output
            gpio.write(16, 0, function() {          // Set pin 16 high (1)
                gpio.close(16);                     // Close pin 16
            });
        });
    }
    res.end();
});

function writetoconsole () {
    console.log('coucou');
}

server.listen(5000);

