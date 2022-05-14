# SONNM API

## Add test

```bash
yarn add chai mocha mocha-junit-reporter -D
```

**.mochrc.js**

```js
"use strict";

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  recursive: true,
  reporter: "mocha-junit-reporter",
  "reporter-option": ["mochaFile=./coverage/spec.xml"], // array, not object

  retries: 1,
  slow: "75",
  sort: false,
  spec: ["test/*.spec.js", "test/**/*.spec.js", "test/**/**/*.spec.js"], // the positional arguments!
};
```
