
const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize;
const Form = require("../../src/db/models").Form;

describe("routes : form", () => {
  beforeEach((done) => {
    this.form;
    sequelize.sync({force: true}).then((res) => {

      Form.create({
        parentFirstName: "John",
        parentLastName: "Smith",
        studentFirstName: "Joe",
        studentLastName: "Smith",
        email: "jsmithy@aol.com",
        phoneNumber: 1111111111,
        grade: 5,
        mathSubject: "algebra",
        detailsAndAvailbility: "Anytime. Anywhere"

      })
      .then((form) => {
        this.form = form;
        done();
      })
      .catch((err) => {
        done();
      });

    });

  });


  describe("POST /create", () => {
    const options = {
      url: `${base}create`,
      form: {
        parentFirstName: "Mary",
        parentLastName: "Mack",
        studentFirstName: "Matthew",
        studentLastName: "Mack",
        email: "mmacky@aol.com",
        phoneNumber: 2222222222,
        grade: 6,
        mathSubject: "geometry",
        detailsAndAvailbility: "Right here. Right now."
      }
    };
    it("should create a new form", (done) => {

      //#1
      request.post(options,

        //#2
        (err, res, body) => {
          Topic.findOne({where: {title: "blink-182 songs"}})
          .then((topic) => {
            expect(res.statusCode).toBe(303);
            expect(topic.title).toBe("blink-182 songs");
            expect(topic.description).toBe("What's your favorite blink-182 song?");
            done();
          })
          .catch((err) => {
            done();
          });
        }
      );
    });
  });

}
