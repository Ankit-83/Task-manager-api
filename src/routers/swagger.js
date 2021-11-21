const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../swagger/swaggerDef");

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ["src/swagger/*.yml", "src/routers/*.js"],
});

router.use("/swagger", swaggerUi.serve);
router.get(
  "/swagger",
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;
