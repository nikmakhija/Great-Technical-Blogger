const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });
