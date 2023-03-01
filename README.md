# JSON-viewer

[![NPM version](https://img.shields.io/npm/v/json-viewer-react.svg)](https://www.npmjs.com/package/json-viewer-react) [![License](https://img.shields.io/npm/l/json-viewer-react.svg)](https://github.com/Alejandro-Vas/JSON-viewer/blob/master/LICENSE)



## Features
✓ view JSON as tree
✓ expanding an collapsing properties
✓ primitive properties colorization
✓ casting `null` type to `string`
✓ zero dependencies


## Installing
```js
npm i json-viewer-react
```
or
```js
yarn add json-viewer-react
```

## Import
```js
import { JsonViewer } from 'json-viewer-react';
```
## Example usage
```js
import  { JsonViewer }  from "json-viewer-react"
import  json  from './data.json';

function App() {
  return (
    <JsonViewer json={json} />
  );
}

export default App;
```
## React support
Component supports react >16.0.0

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
