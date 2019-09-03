module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const contentRoutes = require("../routes/content");

    app.use(staticRoutes);
    app.use(contentRoutes);
  }
}
