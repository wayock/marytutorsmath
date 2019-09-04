const Content = require("./models").Content;

module.exports = {

//#1
  getAllContents(callback){
    return Content.findAll()

//#2
    .then((contents) => {
      callback(null, contents);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
