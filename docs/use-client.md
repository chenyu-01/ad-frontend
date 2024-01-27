# Use State in Next JS

## Problem

When using useState in Next.js, the following error is thrown:

```
You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
Learn more: https://nextjs.org/docs/getting-started/react-essentials

   ╭─[C:\....\Project\ad-frontend\src\app\property-list\page.js:1:1]
 1 │ import React, { useState } from "react";
   ·                 ────────
 2 │ const PropertyList = () => {
 3 │   // Assuming 'properties' is the array of property data and 'categories' for the dropdown
 4 │   const [properties, setProperties] = useState([
   ╰────

Maybe one of these should be marked as a client entry with "use client":
  ./src\app\property-list\page.js

```

## Explaination

In Next.js, the use of useState from React requires a specific handling due to the server-side rendering (SSR) capabilities of Next.js. When you use useState or other React state management hooks in a Next.js component, it's important to ensure that these hooks are only called in a client-side environment. This is because Next.js pre-renders pages on the server, where the state cannot be maintained as it would in a browser.

## Sollution

add 'use client' to the top of the file to ensure that the code is only run on the client side.

## Example

```js
import { useState, useEffect } from "react";
("use client");

const [state, setState] = useState(null);
export default function Component() {
  useEffect(() => {
    if (window) {
      setState(window);
    } else {
      setState("default");
    }
  }, []);
  return <div>{state}</div>;
}
```
