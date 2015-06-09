Allows SystemJS users to syncronously import a pre-bundled module. It achieves this by using the [_synchronous-inspection_](https://github.com/petkaantonov/bluebird/blob/master/API.md#synchronous-inspection) feature of [Bluebird](https://github.com/petkaantonov/bluebird) together with a forced _synchronous-resolution_ mechanism that we add ourselves.

The upshot of this is that, whereas you might normally import a module with SystemJS like this:


```js
var System = require('systemjs');

System.import('some-module').then(function(m) {
	console.log(m);
});
```

you can instead write synchronous code like this:

```js
var syncImport = require('sync-import');

var m = syncImport('some-module');
console.log(m);
```
