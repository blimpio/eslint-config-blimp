/* eslint-env mocha */
const assert = require('chai').assert;
const getRuleFinder = require('eslint-find-rules');
const CLIEngine = require('eslint').CLIEngine;
const config = require('../');

describe('config', function() {
  it('should have parser', function() {
    assert.isDefined(config.parser);
  });

  it('should have env', function() {
    assert.isObject(config.env);
  });

  it('should have ecmaFeatures', function() {
    assert.isObject(config.ecmaFeatures);
  });

  it('should have rules', function() {
    assert.isObject(config.rules);
  });

  it('should set all available rules', function() {
    const ruleFinder = getRuleFinder();
    assert.equal(ruleFinder.getUnusedRules().length, 0);
  });

  it('should load without syntax errors', function() {
    const engine = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    });
    const code = 'const foo = 1;\nconsole.log(foo);\n';
    assert.equal(engine.executeOnText(code).errorCount, 0);
  });

  it('should pass eslint rules', function() {
    const engine = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    });
    const paths = ['index.js', 'test/config.js'];
    assert.equal(engine.executeOnFiles(paths).errorCount, 0);
  });
});
