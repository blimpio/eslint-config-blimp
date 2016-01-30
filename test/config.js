/* eslint-env mocha */
/* eslint-disable no-var */
var assert = require('chai').assert;
var config = require('../');
var CLIEngine = require('eslint').CLIEngine;

describe('config', function() {
  it('should have parser', function() {
    assert.isDefined(config.parser);
  });

  it('should have plugins', function() {
    assert.isArray(config.plugins);
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

  it('should load without syntax errors', function() {
    var cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    });

    var code = 'const foo = 1;\nconsole.log(foo);\n';

    assert.ok(cli.executeOnText(code).errorCount === 0);
  });
});
