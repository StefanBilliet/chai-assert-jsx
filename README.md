# chai-assert-jsx
a chai assert plugin to compare JSX elements without trying to compare functions

## Installation

### Node.js

Install via [npm](http://npmjs.org):

```bash
npm install chai-assert-jsx
```

You can then use this plugin as any other Chai plugins:

```js
import chai, {assert} from 'chai';
import assertJSX from 'chai-assert-jsx'

chai.use(assertJSX);


 assert.equalJSX(<div></div>, <div></div>);

```
