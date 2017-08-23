# redux-date-now-middleware

Redux middlware to provide Date.now() in actions

## Install

```
npm install redux-date-now-middleware
```

## Example

```
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import dateNowMiddlware from 'redux-date-now-middleware';
//                        or 'redux-date-now-middleware/src'

let store = createStore(
  reducers,
  {}
  applyMiddleware(logger)
);
```
