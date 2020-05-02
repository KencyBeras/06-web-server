const http = require('http');


http.createServer((req, resp) => {
        resp.writeHead(200, { 'cotent-type': 'application/json' });
        let salida = {
            nombre: 'Beras',
            edad: 24,
            url: req.url
        }

        resp.write(JSON.stringify(salida));
        resp.end();

    })
    .listen(8080);

console.log('Escchando puerto 8080');