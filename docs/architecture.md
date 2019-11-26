- [Architecture](./architecture.md)
  - [Common](#common)
  - [App](#app)
    - [Components](#components)
    - [Modules](#modules)
      - [Action Types](#action-types)
      - [Actions](#actions)
      - [Models](#models)
      - [Reducers](#reducers)
      - [Selectors](#selectors)
    - [Shell](#shell)
- [CSS Tooling](./css-tooling.md)

# Architecture

React Base is based on [Redux](http://redux.js.org/) paradigm so you can find all the typical entities of an Redux
project like [reducers](http://redux.js.org/docs/basics/Reducers.html),
[store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are few important folders under `./src/`:

## Common

`./src/common` contains some tools that you'll be using across all your application.

```javascript
common /
apis / // Some custom interfaces to interact with APIs or external and complex packages
reports / // APIs for reporting tools
  analytics.ts; // An API to interact with google analytics
sentry / // An API to interact with Sentry
constants / // Collection of useful constants
// Some of the most interesting are:
styles / // CSS tooling
  appRoutes.ts;
branding.ts;
features.ts;
types / // Some types definitions
utils / // Some useful functions
  // Some of the most interesting are:
  idb.ts; // Functions to interact with indexed DB
logger.ts; // Custom console.logs, that report to sentry or are hidden in production
```

## App

`./src/app/` is the place where to put your application source code.

### Components

**React Base** provides you with a list of simple visual components to represent certain data.

All of them are placed in `./src/app/components/`, and here you have some of the most interesting ones:

```javascript
app/
  components/
    avatar/ // Represents company/user avatar
    card/ // A component to wrap other components and save some spaces around them
    forms/ // A custom form that abstracts most of the logic of Formik
    message/ // Bubble messages
    modal/
    page/ // Page wrapper, where cards should be placed
    spinner/
    tabs/
    touchable/ // Buttons and links are living here

```

### Containers

React Base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own
folder inside modules folder as in `src/app/modules/myModule`

A module (usually named as container) is a React component who contains other components, Redux entities, functions and
store subscriptions. Each container is self-contained and represents a feature like "clients" or "products" and it
contains all the necessary stuff.

```javascript
app /
modules /
myModules /
actionTypes / // action types definition
actions / // action creators
components / // smaller components used in the functional component
models / // models using immutable
reducers / // reducer node for this container
selectors / // selectors to access particular data in our reducers
styles / // styles for the functional component
types / // type definitions used on this container
  index.tsx; // functional component
```

#### Action Types

ActionTypes it's a representation using constants of your possible actions:

```javascript
import { ModuleActionType } from '../types';

export const MY_ACTION: ModuleActionType = 'MY_ACTION';
export const MY_ACTION_REQUEST: ModuleActionType = 'MY_ACTION_REQUEST';
export const MY_ACTION_SUCCESS: ModuleActionType = 'MY_ACTION_SUCCESS';
export const MY_ACTION_FAILURE: ModuleActionType = 'MY_ACTION_FAILURE';
```

#### Actions

Actions are payloads of information witch represent that something happend in your application and send data from your
application to your store:

```javascript
import { MY_ACTION } from '../actionTypes';

export const syncAction = () => ({
  type: ActionTypes.MY_ACTION,
});
```

React Base include a Redux Store middleware to handle actions with service calls more easyly, so, in your action you can
attach this service call in your action using the request param:

```javascript
import { MY_ACTION_REQUEST, MY_ACTION_SUCCESS, MY_ACTION_FAILURE } from '../actionTypes';
import { createActivitiesFromServer } from '../models';

export const asyncAction = payload => dispatch => {
  // Dispatch your request action
  dispatch({ type: MY_ACTION_REQUEST });

  return manappApi.activities
    .getActivities(payload)
    .then(({ activities }) => {
      const payload = {
        activities: createActivitiesFromServer(activities), // We'll see about this function few lines ahead
      };

      // Dispatch your success action
      dispatch({
        type: MY_ACTION_SUCCESS,
        payload,
      });

      // Return the payload, just in case you need to access to it in your component
      return payload;
    })
    .catch(({ err }) => {
      // In case of error, dispatch your error action
      dispatch({
        type: ACTIVITIES_NOT_UPDATED,
        payload: err,
      });

      // Return the payload, just in case you need to access to it in your component
      return err;
    });
};
```

#### Models

Stores some of the elements you're going to use in the application, such as the initial state of the container reducer.

Here there are also `modelCreators`, which are functions to parse results from any API on the internet, and make sure
the result of those requests are a valid model for your application, that respects your typing requirements.

```javascript
import { ActivitiesState, ActivityFromServer, Activity } from '../types';

// Model for the initialState of your reducer
export const initialState: ActivitiesState = {
  collection: [],
  isFetching: false,
};

// Model creator will ensure the data provided by the server is valid.
// If data is not valid, you can throw an error and discard that data, to prevent
// crashing the application
export const createActivityFromServer = ({ id, message }: ActivityFromServer): Activity | undefined => {
  if (typeof id === 'undefined' || typeof message === 'undefined') {
    console.error('Error creating activity model, some of mandatory properties is missing', { id, message });

    return undefined;
  }

  return {
    id: Number(id),
    message: String(message),
  };
};

export const createActivitiesFromServer = (activities: ActivityFromServer[]): Activity[] =>
  activities.map(createActivityFromServer).filter(a => !!a);
```

#### Reducers

Reducers describe how the state of your application changes in response to a new Action. React Base uses "switch based"
reducers, returning always new instances of the state.

```javascript
import { updateCollection } from '../../../utils/collections';

import {
  RESOURCE_REQUESTED,
  RESOURCE_UPDATED,
  RESOURCE_NOT_UPDATED,
} from '../actionTypes';

import { getState } from '../models';
import { ResourceAction, ResourceState, Resource } from '../types';

const initialState = getState();

const reducer = (state = initialState, action: ResourceAction): ResourceState => {
  switch (action.type) {
    case RESOURCE_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case RESOURCE_UPDATED:
      const resourceFromServer = action.payload.resource as Resource[];
      return {
        ...state,
        collection: updateCollection(state.collection, resourceFromServer),
        isFetching: false,
      };

    case RESOURCE_NOT_UPDATED:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default reducer;
```

#### Selectors

Selectors are abstracted functions to access to a particular point of your container store.

We use to access to the same data from different access points, and we also use to need data A to check/generate data B.
In these scenarios, abstract selectors in simple and atomic functions will help us to minimize errors when changing
reducer's shape

```javascript
import { sortBy } from '../../../utils/arrays';
import { isEmployee } from '../../../utils/permissions';
import { formatDate } from '../../../utils/ui';

import { RootState } from '../../../types';

export const isFetchingResource = ({ resource }: RootState) => resource.isFetching;

export const getResources = ({ resource }: RootState) => resource.collection.map(c => c).sort(sortBy('id', 'asc'));

export const getResource = ({ resource }: RootState) => (slug: string) =>
  resource.collection.find(c => c.slug === slug);

export const getResourceById = ({ resource }: RootState) => (id: string) => resource.collection.find(c => c.id === id);

export const getSelectedResource = ({ resource }: RootState) =>
  resource.collection.find(c => c.id === resource.selected);

export const getSelectedResourceId = ({ resource }: RootState) =>
  resource.selected !== '-1' ? resource.selected : undefined;
```

### Shell

The shell is composed by the elements that will be shown always, without taking care about the content. **React Base**'s
shell is a very simple one, as you can see:

```javascript
app/
  shell/
    Header/
    Footer/
```
