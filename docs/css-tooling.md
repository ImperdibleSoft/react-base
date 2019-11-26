- [Architecture](./architecture.md)
- [CSS Tooling](./css-tooling.md)
  - [Defining your color palette](#defining-your-color-palette)
  - [Coloring your components](#coloring-your-components)
  - [Sizing your components](#sizing-your-components)
  - [Using media-queries](#using-media-queries)
  - [Using matchMedia API](#using-matchmedia-api)
  - [Using z-index](#using-z-index)

# CSS tooling

**React Base** is providing several tools to code `styled-components` easily.

## Defining your color palette

As each company has its own brand, it's very common to have different color palettes on each application.

For this purpose, **React Base** provides a file stored in `./src/common/constants/styles/do-not-export/colors.ts` where
you will be able to setup your colors' palette, as follows:

```javascript
export const WHITE_1 = '#fff';
export const WHITE_2 = '#f4f4f4';

export const GREY_1 = '#999';
export const GREY_2 = '#666';
export const GREY_3 = '#333';

export const BLUE_1 = '#0000ff';
```

You **will not** use these variables in your components

## Coloring your components

If you use these colors directly in your components, you will end with something like this:

```javascript
// ./src/app/containers/MyContainer/styles/index.ts
import { BLUE_1 } from 'app/styles/do-not-export/colors';

const myLink = styled.a`
  color: ${BLUE_1};
`;

const myTitle = styled.h1`
  color: ${BLUE_1};
`;
```

So here is the scenario:

- When you want to make `myTitle`'s color darker, by modifying `BLUE_1` value, it will change also `myLink`'s color.
- On the other hand, `BLUE_1` has no context and it's not descriptive enough.
- Also, generating `BLUE_LINK` or `BLUE_TITLE` will result on having 2 different variables with the same value. Or even
  worst! With very similar values.

To resolve this **React Base** provides a file stored in `./src/common/constants/styles/skin.ts`, where you will assing
your decontextualized color palette to your components colors.

```javascript
// ./src/common/constants/styles/skin.ts
import { GREY_1 } from './do-not-export/colors';

export const LINK_COLOR = GREY_1;
export const TITLE_COLOR = GREY_1;

// ./src/app/containers/MyContainer/styles/index.ts
import { LINK_COLOR, TITLE_COLOR } from 'app/styles/skin';

const myLink = styled.a`
  color: ${LINK_COLOR};
`;

const myTitle = styled.h1`
  color: ${TITLE_COLOR};
`;
```

Benefits using this approach:

- Having all hex colors in the same place
  - Detect very similar colors. _Maybe_ you could reuse a color, instead of creating a new color that is 1% different
  - Limit the color palette size easily, so UI is cleaner and less heavy
- Components only will use contextualized color variables

## Sizing your components

Probably you would like to reuse some sizes (such the header's height) in other components.

For example, you would like to have a header with a fixed height of `3rem`, and you probably would like that your page's
content fill the rest of the screen height, using a `calc(100vh - 3rem)` (if flex is not available).

On these scenarios, you should move your `3rem` value to a constant. For that purpose **React Base** provides you with
`./src/common/constants/styles/sizes.ts`

```javascript
import styled from 'styled-components';
import { HEADER_SIZE } from 'base/styles/sizes';

const Header = styled.header`
  height: ${HEADER_SIZE};
`;

const Content = styled.main`
  height: calc(100vh - ${HEADER_SIZE});
`;
```

## Using media-quieries

Now that we have styles in javascript, we can take advantages of variables to generate a solid and reusable
`media-queries` system.

**React Base** provides a large collection of standarized screen sizes, that will allow you to use `media-queries` in
your `styled-components`, but it will also allow you to get those `queries` to be used in javascript
[window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API.

By default, `./src/common/constants/styles/media-queries.ts` exports 2 different types of `media-queries`:

- Maximum: Styles will be applied when the screen width is **smaller** than specified width
- Minimum: Styles will be applied when the screen width is **equal or bigger** than specified width

_There are some custom `media-queries`, like `LANDSCAPE` or `LANDSCAPE_OR_TABLET`. Check the file to know more about
them_

When building a responsive site, you should start specifiying your CSS properties for smaller screens, and use _minimum_
media-queries to modify your component's appearance as the screen size increases.

This means that you should avoid using _maximum_ media-queries as much as you are able.

If you follow these advices, you should end with components very similar to this:

```javascript
import { TABLET, DESKTOP } from 'base/styles/media-queries';

export const HeaderBar = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  padding: 1rem;
  width: 100%;

  ${TABLET} {
    height: 4rem;
  }

  ${DESKTOP} {
    height: 5rem;
    padding: 2rem;
  }
`;
```

## Using matchMedia API

Now that your components are CSS responsive, you could face an scenario where your DOM shape should be different in
different screen sizes, so you need to use different components depending on the screen size.

For doing that, you should use `window.matchMedia()` API, that accepts a string as parameter and it returns a boolean
depending if your screen matches that media.

The problem is than our `media-queries` constants are something like `@media screen and (min-width: 720px)` and
`window.matchMedia` doesn't like that format.

To solve that, `./src/common/constants/styles/media-queries.ts` has a default `export` that you can use to adapt your
`media-query` to be used with this API.

```javascript
import getQuery, { MOBILE_MAX } from 'base/styles/media-queries';
import MobileComponent from './components/Mobile';
import BiggerComponent from './components/Bigger';

const YourComponent = () => {
  const isMobile = window.matchMedia(getQuery(MOBILE_MAX));

  if (isMobile.matches) {
    return <MobileComponent />;
  }

  return <BiggerComponent />;
};
```

## Using z-index

When using `z-index` in a module-based application, you could end with a mess, forgetting values that you have used in
any places that uses `z-index`.

Do you remember when that modal was behind the header? Do you remember that content picture being above your header or
your sidebar?

**React Base** has a `layer` system that sorts content in different layers. They can be modified if needed, but default
ones will fit most of the projects:

1. Background
2. Content
3. Sidebar
4. Header
5. Modal
6. Notification

Those layers are graphically sorted in an array, stored in `./src/common/constants/styles/z-index.ts`. So, this file's
default exports is a function called `getLayerPosition` that returns the layer position in this array (using
`[].findIndex`).

Yes! That simple!

- If you modify array's order, layers' positions will be modified, and **all your `z-index` will be updated**.
- If the layer you select is not found, it will return a -1 (the lowest possible value).
- If you stack different components with the same layer position, they will use the DOM order to stablish which one will
  be above
  - Imagine when a modal opens another modal:
    - Both modals will be above the header
    - Second modal will be above first one, since it's the lastest in the DOM <3

So, how's going to look your code?

```javascript
import styled from 'styled-components';

export const Header = styled.div`
  z-index: ${getLayerPosition('HEADER')};
`;

export const Sidebar = styled.div`
  z-index: ${getLayerPosition('SIDEBAR')};
`;

export const Modal = styled.div`
  z-index: ${getLayerPosition('MODAL')};
`;

export const Popup = styled.div`
  z-index: ${getLayerPosition('MODAL')};
`;
```
