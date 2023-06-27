const express = require('express');
const dns = require('dns');

const app = express();
const port = 3000;

app.get('/ip-to-domain', (req, res) => {
  const ipAddress = req.query.ip;

  dns.reverse(ipAddress, (err, domains) => {
    if (err) {
      console.error(err);
      res.status(500).send('Ocurrió un error al realizar la búsqueda DNS inversa.');
    } else {
      res.send(domains);
    }
  });
});

app.get('/domain-to-ip', (req, res) => {
  const domain = req.query.domain;

  dns.lookup(domain, (err, addresses) => {
    if (err) {
      console.error(err);
      res.status(500).send('Ocurrió un error al buscar la dirección IP.');
    } else {
      res.send(addresses);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor web iniciado en el puerto ${port}`);
});
