const Application = require('thinkjs');
const dotenv = require('dotenv');
const path = require('path');
let envpath = `${__dirname}/.env.production`;
const instance = new Application({
  ROOT_PATH: __dirname,
  proxy: true, // use proxy
  env: 'production'
});

instance.run();
