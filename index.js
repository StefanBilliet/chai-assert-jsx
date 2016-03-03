import reactElementToJSXString from 'react-element-to-jsx-string';

export default function (_chai, utils) {
  var Assertion = _chai.Assertion;

  Assertion.addMethod('equalJSX', function(expected){
    var obj = this._obj
    var actualString = reactElementToJSXString(obj);
    var expectedString = reactElementToJSXString(expected);

    this.assert(
      actualString === expectedString
      , "expected #{this} to be like #{exp}"
      , "expected #{this} not to be like #{exp}"
      , expectedString
      , actualString
      , true
    )
  });
  _chai.assert.equalJSX = function (val, exp, msg) {
    new _chai.Assertion(val, msg).to.be.equalJSX(exp);
  };
  _chai.assert.notEqualJSX = function (val, exp, msg) {
    new _chai.Assertion(val, msg).to.not.be.equalJSX(exp);
  };
};
