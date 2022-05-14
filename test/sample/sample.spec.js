const expect = require("chai").expect;

describe("Example Group", () => {
  describe("Sample Test Case", () => {
    it("Should Do Something", () => {
      sails.log.verbose("[TEST_ENV]", process.env.NODE_ENV);
      sails.log.verbose("[TEST_PORT]", process.env.PORT || 1337);
      sails.log.verbose("[TEST ENV PARAMS]", process.env.ALLOW_URLS);
      expect(1).to.eq(1);
    });
  });
});
