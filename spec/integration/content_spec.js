const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/admin/";

describe("content access for admin", () => {
  describe("GET /admin", () => {
    it("should return status code 200", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
