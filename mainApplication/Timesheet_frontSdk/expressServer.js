const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken')
const fs = require('fs');
const validateToken = require('./verifyToken')
const axios = require('axios');
require('dotenv').config();


class ExpressServer {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.setupMiddleware();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: '14MB' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(__dirname));
    this.app.get('/', (req, res) => validateToken.validateToken('Home', req, res));
    this.app.get('/Home', (req, res) => validateToken.validateToken('Home', req, res));
    this.app.get('/Home/:id', (req, res) => validateToken.validateToken('Home', req, res));
    this.app.get('/August', (req, res) => validateToken.validateToken('August', req, res));
    this.app.get('/August/:id', (req, res) => validateToken.validateToken('August', req, res));
    this.app.get('/addEmployee', (req, res) => validateToken.validateToken('addEmployee', req, res));
    this.app.get('/addEmployee/:id', (req, res) => validateToken.validateToken('addEmployee', req, res));
    this.app.get('/addAugust', (req, res) => validateToken.validateToken('addAugust', req, res));
    this.app.get('/addAugust/:id', (req, res) => validateToken.validateToken('addAugust', req, res));
    this.app.get('/editAugust', (req, res) => validateToken.validateToken('editAugust', req, res));
    this.app.get('/editAugust/:id', (req, res) => validateToken.validateToken('editAugust', req, res));
    this.app.get('/editEmployee', (req, res) => validateToken.validateToken('editEmployee', req, res));
    this.app.get('/editEmployee/:id', (req, res) => validateToken.validateToken('editEmployee', req, res));
  }

  launch() {
    http.createServer(this.app).listen(this.port);
    console.log(`Listening on port ${this.port}`);
  }


  async close() {
    if (this.server !== undefined) {
      await this.server.close();
      console.log(`Server on port ${this.port} shut down`);
    }
  }
}

module.exports = ExpressServer;