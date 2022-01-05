const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
//helps browser resolve pathing issues
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//return express application
const app = express();

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

//listening on this port allowing server to run
const PORT = process.env.PORT || 3001;

//require sequelize
// const sequelize = require('sequelize');

const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds (86400 === 1 day)
      maxAge: 86400,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
