## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses eslint, prettier, husky, lint-staged, and commitlint for code quality and commit message linting. It also uses tailwindcss for styling.

> note that we are using nextjs version 14.0.4, and tailwindcss 3.3.0. The project is using eslint, prettier, husky, lint-staged, and commitlint for code quality and commit message linting.

## Related Repositories

- [Frontend Next Js](https://github.com/chenyu-01/ad-frontend)
- [Java Spring Boot](https://github.com/chenyu-01/ad-backend)
- [Android](https://github.com/preethivenkat5/ad_android)
- [ML Model](https://github.com/CsCesium/DNN-NCF-Transformer)

## Pre-requisites

- Node.js and npm
  run `npm install` to install all the dependencies.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AuthContext in Our Project

We are using the AuthContext to manage the user authentication state and user data that include user's id.
To use the AuthContext, you can import the AuthContext and use the useContext hook to access the user data and the login and logout functions.

```javascript
import { useContext } from "react";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";

function TestComponent() {
  const { userData, isAuthenticated } = useContext(AuthContext);
  {
    /*return ( 
    <div>
      <h1>{userData.name}</h1>
      <h2>{userData.email}</h2>
      <h3>{userData.role}</h3>
      <h4>{userData.contactNumber}</h4>
      <h5>{userData.customerId}</h5>
    </div>
  );*/
  }
}
```

Here is userData object structure:

```javascript
{
  customerId: string,
  email: string,
  name: string,
  role: string,
  contactNumber: string,
}
```
