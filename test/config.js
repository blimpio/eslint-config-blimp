/* eslint-env mocha */
const { assert } = require("chai");
const { CLIEngine } = require("eslint");
const config = require("../");

describe("config", function () {
  it("should have env", function () {
    assert.isObject(config.env);
  });

  it("should have rules", function () {
    assert.isObject(config.rules);
  });

  it("should have plugin prefer-let", function () {
    assert.isArray(config.plugins);
    assert.equal(config.plugins[0], "prefer-let");
    assert.equal(config.rules["prefer-let/prefer-let"], 2);
  });

  it("should load without syntax errors", function () {
    let engine = new CLIEngine({
      useEslintrc: false,
      configFile: "eslintrc.json",
    });
    let code =
      "let foo = 1;\nconst bar = 2;\nconsole.log(foo, bar);\n" +
      "async function baz() {}\nbaz();\n";
    assert.equal(engine.executeOnText(code).errorCount, 0);
  });

  it("should pass eslint rules", function () {
    let engine = new CLIEngine({
      useEslintrc: false,
      configFile: "eslintrc.json",
    });
    let paths = ["index.js", "test/config.js"];
    assert.equal(engine.executeOnFiles(paths).errorCount, 0);
  });
});
