const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/admin/";
const sequelize = require("../../src/db/models/index").sequelize;
const Content = require("../../src/db/models").Content

describe("content access for admin", () => {

  beforeEach((done) => {
       this.content;
       sequelize.sync({force: true}).then((res) => {

        Content.create({
          name: "About Me",
          title: "About Me",
          contents: "I am awesome!"
        })
         .then((content) => {
           this.content = content;
           done();
         })
         .catch((err) => {
           console.log(err);
           done();
         });

       });

     });

  describe("GET /admin", () => {
    it("should return status code 200 and all contents", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("About Me");
        expect(body).toContain("I am awesome!");
        done();
      });
    });
  });
});
