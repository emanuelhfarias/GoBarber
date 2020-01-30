const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({message: 'World! nóis'});
});

module.exports = routes;