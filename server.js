const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
//helps browser resolve pathing issues
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//return express application
const app = express();

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//listening on this port allowing server to run
const PORT = process.env.PORT || 3001;
//require sequelize
const sequelize = require('sequelize');