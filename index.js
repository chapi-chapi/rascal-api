// index.js
const yamlFile = "test.yaml",
  fs = require("fs"),
  jsYaml = require("js-yaml");
const apiFile = jsYaml.load(fs.readFileSync(yamlFile, { encoding: "utf-8" }));

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
apiFile.api.routes.forEach((route) => {
  if (route.httpVerb === "GET") {
    app.get(route.path, (req, res) => {
      res.status(200).send(route.result);
    });
  }
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
