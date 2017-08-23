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
import dateNowMiddlware from 'redux-date-now-middleware'; // Or 'redux-date-now-middleware/src'

let store = createStore(
  reducers,
  {}
  applyMiddleware(dateNowMiddleware())
);
```

```
import { DATE_NOW } from 'redux-date-now-middleware';

const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'update') {
     return { ...state, data: action.data, lastModified: action[DATE_NOW] };
  }
  return state;
};
```

## Customization

```
dateNowMiddleware('custom name', () => new Date())
```
