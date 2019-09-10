module.exports = {
  index(req, res, next){
    //console.log("test");
    res.render("static/index", {title: "Welcome to Mary Tutors Math!"});
  }
}
