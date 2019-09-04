const contentQueries = require("../db/queries.contents.js");

module.exports = {
  index(req, res, next){
    contentQueries.getAllContents((err, contents) => {
       if(err){
         res.redirect(500, "static/index");
       } else {
         res.render("admin/index", {contents});
       }
    })
  }
}
